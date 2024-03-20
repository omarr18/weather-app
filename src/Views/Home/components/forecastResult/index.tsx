import { useState } from "react";
import {
  ForecastHour,
  ForecastDay,
} from "@/models/Home/forecastApiResponse.model";
import { getDay } from "@/utils/helpers/formatDate.helper";

export default function ForecastResult({
  hoursArray,
  isCelsius,
  daysArray,
}: {
  hoursArray: ForecastHour[];
  isCelsius: boolean;
  daysArray: ForecastDay[];
}) {
  const [isHourly, setIsHourly] = useState<boolean>(true); // tabs state
  return (
    <div className="w-[90%] mx-auto">
      {/* Tabs ==> hourly, daily */}
      <div className="border-b flex gap-8 mb-9 border-white border-opacity-50">
        <p
          onClick={() => setIsHourly(true)}
          className={`pb-3 cursor-pointer font-bold text-[22px] ${
            isHourly ? "border-b-[3px] border-white" : ""
          }`}
        >
          Hourly
        </p>
        <p
          onClick={() => setIsHourly(false)}
          className={`pb-3 cursor-pointer px-3 font-bold text-[22px] ${
            isHourly ? "" : "border-b-[3px] border-white"
          } `}
        >
          Daily
        </p>
      </div>

      {/* Forecast data */}
      <div className="flex px-1.5 border-b border-white border-opacity-50 overflow-auto lg:px-3 gap-8 lg:gap-14">
        {isHourly
          ? hoursArray?.map((hr, i) => (
              <div
                key={hr.time}
                className="flex justify-between flex-col items-center"
              >
                <p className="text-lg lg:text-2xl mb-2 lg:mb-3.5">
                  {i === 0 ? "Now" : hr.time.split(" ")[1]}
                </p>
                <img
                  src={"https:" + hr?.condition?.icon}
                  alt="weather-status-icon"
                  className="min-w-16 mb-1"
                />
                <p className="text-[25px]  lg:text-[30px] mb-4">
                  {isCelsius ? Math.floor(hr?.temp_c) : Math.floor(hr?.temp_f)}
                  <span className="relative -top-2 lg:-top-3">°</span>
                </p>
              </div>
            ))
          : daysArray.map((day, i) => (
              <div
                key={day.date}
                className="flex justify-between flex-col items-center"
              >
                <p className="text-lg lg:text-2xl mb-2 lg:mb-3.5">
                  {i === 0 ? "Today" : getDay(day?.date)}
                </p>
                <img
                  src={"https:" + day?.day?.condition?.icon}
                  alt="weather-status-icon"
                  className="min-w-16 mb-1"
                />
                <p className="text-[25px]  lg:text-[30px] mb-4">
                  {isCelsius
                    ? Math.floor(day?.day?.avgtemp_c)
                    : Math.floor(day?.day?.avgtemp_f)}
                  <span className="relative -top-2 lg:-top-3">°</span>
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

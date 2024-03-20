import { formatDate } from "../../../../utils/helpers/formatDate.helper";
import ForecastResponse from "../../../../models/Home/forecastApiResponse.model";

export default function GeneralInfo({
  data,
  isCelsius,
}: {
  data?: ForecastResponse;
  isCelsius: boolean;
}) {
  return (
    <div className="w-[90%] mx-auto mb-[10dvh] flex flex-col md:flex-row gap-4 justify-between">
      <div className="flex flex-col  items-center md:items-start">
        <p className="font-bold text-3xl lg:text-6xl mb-1">
          {data?.location.name}
        </p>
        <p className="font-bold text-sm lg:text-lg tracking-wider mb-4 ">
          {formatDate()}
        </p>
        <img
          src={"https:" + data?.current.condition.icon}
          alt="weather-status-icon"
          className="w-16"
        />
        <p className="font-bold text-lg lg:text-3xl">
          {data?.current?.condition?.text}
        </p>
      </div>
      <div className=" lg:p-3relative flex flex-col items-center md:items-end">
        <p className="font-bold text-[45px]  lg:text-[90px]">
          {isCelsius
            ? Math.floor(data?.current.temp_c || 0)
            : Math.floor(data?.current.temp_f || 0)}
          <span className="relative text-[35px] lg:text-[60px] -top-2 lg:-top-8">
            °
          </span>
        </p>
        <p className="text-[25px]  lg:text-[30px] mb-2.5 lg:mb-4">
          {isCelsius
            ? Math.floor(data?.forecast?.forecastday[0]?.day.maxtemp_c || 0)
            : Math.floor(data?.forecast?.forecastday[0]?.day.maxtemp_f || 0)}
          <span className="relative -top-2 lg:-top-3">°</span> /{" "}
          {isCelsius
            ? Math.floor(data?.forecast?.forecastday[0]?.day.mintemp_c || 0)
            : Math.floor(data?.forecast?.forecastday[0]?.day.mintemp_f || 0)}
          <span className="relative -top-2 lg:-top-3">°</span>
        </p>
        <p className="text-lg lg:text-xl  font-semibold">
          {data?.forecast?.forecastday[0]?.day?.condition?.text}
        </p>
      </div>
    </div>
  );
}

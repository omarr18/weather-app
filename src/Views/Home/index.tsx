import { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import GeneralInfo from "./components/general-info";
import ForecastResult from "./components/forecastResult";
import { getWeatherData } from "@/services/forecast.service";
import ForecastResponse from "@/models/Home/forecastApiResponse.model";
import { getHoursArray } from "@/services/forecast.service";
import Loader from "./components/loader";


export default function Home() {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [responseData, setResponseData] = useState<ForecastResponse>();

  const changeDegreeType = () => {
    setIsCelsius(prev => !prev);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherData(`${latitude},${longitude}`).then((res) => {
            setResponseData(res);
            setIsLoading(false)
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
          setIsLoading(false)
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return isLoading ? <Loader /> : (
    <div className=" bg-hero-image py-10 bg-no-repeat bg-center  bg-cover w-[100dvw] overflow-x-hidden min-h-screen">
      <Navbar changeDegreeType={changeDegreeType} isCelsius={isCelsius} />
      <GeneralInfo
        isCelsius={isCelsius}
        data={responseData}
      />
      <ForecastResult
        hoursArray={getHoursArray(
          responseData?.forecast?.forecastday[0].hour || [],
          responseData?.forecast?.forecastday[1].hour || [],
          responseData?.current?.last_updated || ""
        )}
        isCelsius={isCelsius}
        daysArray={responseData?.forecast.forecastday || []}
      />
    </div>
  );
}

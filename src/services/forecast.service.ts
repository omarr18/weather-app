import ForecastResponse, {
  ForecastHour,
} from "@/models/Home/forecastApiResponse.model";
import instance from "@/api/axios";
import { AxiosResponse } from "axios";

export const getWeatherData = async (
  location: string
): Promise<ForecastResponse | undefined> => {
  try {
    const res: AxiosResponse<ForecastResponse> = await instance.get(
      `/forecast.json?key=${
        import.meta.env.VITE_WEATHER_KEY
      }&q=${location}&days=14`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getCurrentHourIndex = (hours: ForecastHour[], last_updated: string) => {
  //find index of the current hour object from the current day hoursArray
  return hours.findIndex(
    (hr: ForecastHour) =>
      new Date(hr?.time).getHours().toString().padStart(2, "0") ===
      new Date(last_updated).getHours().toString().padStart(2, "0")
  );
};

export const getHoursArray = (
  currentDayHours: ForecastHour[],
  nextDayHours: ForecastHour[],
  last_updated: string
): ForecastHour[] => {
  const currentHour = getCurrentHourIndex(currentDayHours, last_updated); // find index of the current hour object from the current day hoursArray
  if (currentHour !== -1) {
    const hoursArray = currentDayHours.slice(currentHour); // contain hours of today from now and from the next day
    for (let i = 0; i < currentHour + 1; i++) {
      hoursArray.push(nextDayHours[i]); // push hours from the next day
    }
    return hoursArray;
  }
  return [];
};

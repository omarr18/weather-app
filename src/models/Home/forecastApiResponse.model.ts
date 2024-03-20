export interface ForecastHour{
    temp_c: number,
    temp_f: number,
    condition: {
        text: string,
        icon: string,
    },
    time:string
}

export interface ForecastDay {
    date: string,
    day: {
        maxtemp_c: number,
        maxtemp_f: number,
        mintemp_c: number,
        mintemp_f: number,
        avgtemp_c: number,
        avgtemp_f: number,
        condition: {
            text: string,
            icon: string
        }
    },
    hour:ForecastHour[]
}

export default interface ForecastResponse {
    location: {
        name: string,
        region: string,
        country: string,
        localtime:string
    },
    current: {

        temp_c: number,
        temp_f: number,
        condition: {
            text: string,
            icon: string,
        },
        last_updated:string
    },
    forecast: {
        forecastday: ForecastDay[]
    }
}
import axios from "axios"

export const fetchCovidCountries = () => {
    return axios("https://disease.sh/v3/covid-19/countries")
}

export const fetchHistoricalCovidAllDays = () => {
    return axios("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
}
import axios from "axios";

const RAPIDAPI_KEY = "";

export const baseUrl = "https://bayut.p.rapidapi.com";

export async function fetchApi(url) {
   const { data } = await axios.get(url, {
      headers: {
         "X-RapidAPI-Key": RAPIDAPI_KEY,
         "X-RapidAPI-Host": "bayut.p.rapidapi.com"
      }
   });

   return data;
}
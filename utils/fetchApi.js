import axios from "axios";

const RAPIDAPI_KEY = "3c1f44a888msh919b64a8d3f2032p114241jsnff172045832b";

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

import { create } from "apisauce";

export const api = create({
      baseUrl: 'http://localhost:44361/',
      headers: {
        'Content-Type': 'application/json'
        }
    }); 

export async function getWordData() {
    return await api.get('api/WeatherForecast').then(res => { 
        const apiResponse = res;
        if (apiResponse.ok) {
          return apiResponse.data[1];
        }
        else{
          return "";
        }
      })
}
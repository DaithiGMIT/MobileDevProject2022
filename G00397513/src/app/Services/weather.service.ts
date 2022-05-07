import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.weatherApiUrl;
const API_KEY = environment.weatherApiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  currentArticle: any;
  //retrieves data from the news api at api.openweathermap.org

  constructor(private http:HttpClient) { }

  getWeatherData(lat,lon){
    return this.http.get((API_URL + 'lat=' + lat + '&lon='+ lon + '&appid=' + API_KEY));
  }
}

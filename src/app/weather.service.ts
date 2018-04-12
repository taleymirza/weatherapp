import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

   apiKey ='a753fa1f6589114caeeaf1e9467f97fb';
   url;

  constructor(public http: Http) { 
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather(city,code){
    return this.http.get(this.url + city + ',' + code + '&APPID='+ this.apiKey).map((res)=>{
      return res.json();
    })

  }
}

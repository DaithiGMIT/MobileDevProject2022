import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService} from '../Services/weather.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { DecimalPipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  weatherData: any =[];
  lat;
  lon;
  weatherIcon;
  iconUrl;
  location;
  description;
  temp;
  wind;
  
  constructor(private weatherService: WeatherService, private router:Router,private geolocation: Geolocation, private decimalPipe: DecimalPipe) {}

  ngOnInit()
  {
    //retrieves the users current longitude and latitude and uses them to retrieve the locations weather information from the weather service

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

      console.log(this.lat);
      console.log(this.lon);

     })
     .then(() => {this.weatherService.getWeatherData(this.lat,this.lon).subscribe((data) => {
                
                //assigns the relevant data to variables in this page to be used in the html

                this.weatherData = data;
                console.log(data);
                this.weatherIcon = this.weatherData.weather[0].icon;
                console.log(this.weatherIcon);
                //uses the waethers icon code to link to the relevant img url of the icon
                this.iconUrl = 'https://openweathermap.org/img/wn/' + this.weatherIcon + '@4x.png';
                console.log(this.iconUrl);
                this.location = this.weatherData.name + ', ' + this.weatherData.sys.country;
                console.log(this.location);
                this.description = this.weatherData.weather[0].description;
                console.log(this.description);
                this.temp = this.weatherData.main.temp;
                //uses decimal pipe along with converting the tempreature to °C
                this.temp = this.decimalPipe.transform(this.temp - 273.15, '1.2-2');
                console.log(this.temp);
                this.wind = this.weatherData.wind.speed;
                console.log(this.wind);



              });})
     .catch((error) => {console.log('Error getting weather data', error);})
     .catch((error) => {console.log('Error getting location', error);});

  }

  //old code that i was using before i decided to do it all trouh ngOnInit
  //left here incase I wanted to refer back to it

  // loadWeatherData()
  // {
  //   this.weatherService.getWeatherData(this.lat,this.lon)
  //   .subscribe(data => {console.log(data);
  //                       this.weatherData = data;});
  //    console.log("Loaded Weather Data, Image Icon: " + this.weatherData.weather['0']?.icon);
  // }

  // ngOnInit()
  // {
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     this.lat = resp.coords.latitude;
  //     this.lon = resp.coords.longitude;

  //     console.log(this.lat);
  //     console.log(this.lon);

  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });

  //   this.weatherService.getWeatherData(this.lat,this.lon).subscribe((data) => {this.weatherData = data;});

  //    console.log("Loaded Weather Data, Image Icon: " + this.weatherData.weather[0].icon);

  // }

}

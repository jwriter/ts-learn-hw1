import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/data';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  @Input() dataWithWeather: Data;

  constructor() { }

  ngOnInit() {
  }

}

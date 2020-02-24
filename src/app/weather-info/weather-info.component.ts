import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Data } from 'src/data';
import {ChoosenHotelService} from '../services/choosen-hotel.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit, OnDestroy {

  public dataWithWeather: Data;
  private subscription: Subscription;

  constructor( private choosedProductService: ChoosenHotelService) { }

  ngOnInit() {
    this.subscription = this.choosedProductService.chosen.subscribe(
      data => this.dataWithWeather = data
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

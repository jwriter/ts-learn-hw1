import { Component, OnInit, AfterContentInit, EventEmitter } from '@angular/core';
import { Data, Weather, Social } from 'src/data';
import {HotelsService} from '../services/hotels.service';
import {ChoosenHotelService} from '../services/choosen-hotel.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit, AfterContentInit {

  public choosed!: Data;
  public dataSet!: Data[];

  constructor(
    private productService: HotelsService,
    private chosenProduct: ChoosenHotelService
  ) { }

  ngOnInit() {
    this.dataSet = this.productService.getData();
  }

  ngAfterContentInit(): void {
    this.onClick(this.dataSet[0]);
  }

  onClick(event) {
    this.choosed = event;
    this.chosenProduct.push(event);
  }
}

import {Component, OnInit, OnDestroy} from '@angular/core';
import { Data } from 'src/data';
import {Subscription} from 'rxjs';
import {ChoosenHotelService} from '../services/choosen-hotel.service';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent implements OnInit, OnDestroy {

  dataWithSocial: Data;
  private subscription: Subscription;

  constructor( private choosedProductService: ChoosenHotelService) { }

  ngOnInit() {
    this.subscription = this.choosedProductService.chosen.subscribe(
      data => this.dataWithSocial = data
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

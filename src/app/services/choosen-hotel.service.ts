import { Injectable } from '@angular/core';
import {Data} from '../../data';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoosenHotelService {

  public chosen = new Subject<Data>();

  constructor() { }

  push(datum: Data) {
    this.chosen.next(datum);
  }
}

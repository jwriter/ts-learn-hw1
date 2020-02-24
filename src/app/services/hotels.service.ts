import { Injectable } from '@angular/core';
import {Data, Social, Weather} from '../../data';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

  dataSet: Data[] = [
    new Data('../../../assets/peisage 1.jpg', 'address 1', 1234567890,
      new Weather('title1', 'icon1', 27, 25),
      new Social('title1', '../../../assets/avatar 1.jpg', 1001, 999), 'Sea'),
    new Data('../../../assets/peisage 2.jpg', 'address 2', 5555555552,
      new Weather('title2', 'icon2', 28, 26),
      new Social('title2', '../../../assets/avatar 2.jpg', 2001, 1999), 'Mountain'),
    new Data('../../../assets/peisage 3.jpg', 'address 3', 5555555553,
      new Weather('title3', 'icon3', 29, 27),
      new Social('title3', '../../../assets/avatar 3.png', 3001, 2999), 'Sea'),
    new Data('../../../assets/peisage 4.jpg', 'address 4', 4444444444,
      new Weather('title4', 'icon4', 30, 28),
      new Social('title4', '../../../assets/avatar 4.jpg', 4001, 3999), 'Mountain'),
  ];

  public getData(): Data[] {
    return this.dataSet;
  }
}

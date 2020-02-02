import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Data, Weather, Social } from 'src/data';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {

  @Output() onChanged = new EventEmitter<Data>();  
  
  dataSet:Data[] = [
    new Data("../../../assets/peisage 1.jpg","address 1",55555555551, new Weather("title1","icon1",27,25),new Social("title1","../../../assets/avatar 1.jpg",1001,999),"type"),
    new Data("../../../assets/peisage 2.jpg","address 2",55555555552, new Weather("title2","icon2",28,26),new Social("title2","../../../assets/avatar 2.jpg",2001,1999),"type"),
    new Data("../../../assets/peisage 3.jpg","address 3",55555555553, new Weather("title3","icon3",29,27),new Social("title3","../../../assets/avatar 3.png",3001,2999),"type"),
    new Data("../../../assets/peisage 4.jpg","address 4",55555555554, new Weather("title4","icon4",30,28),new Social("title4","../../../assets/avatar 4.jpg",4001,3999),"type"),
  ];  
  public choosed:Data = this.dataSet[0];
  
  constructor() { }

  ngOnInit() {    
    this.onChanged.emit(this.choosed);
  }

  onClick(event) {
    this.choosed = event;
    this.onChanged.emit(event);
  }
}
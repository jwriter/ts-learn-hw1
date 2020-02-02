import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/data';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.css']
})
export class OneItemComponent implements OnInit {
  
  @Input() data: Data;

  constructor() { }

  ngOnInit() {
  }  

}

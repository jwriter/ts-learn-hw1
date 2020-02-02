import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/data';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent implements OnInit {

  @Input() dataWithSocial: Data;
  
  constructor() { }

  ngOnInit() {
  }

}

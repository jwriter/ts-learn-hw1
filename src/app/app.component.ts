import { Component } from '@angular/core';
import { Data } from 'src/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hmw1';

  choosedItem:Data;

  onChanged(increased:Data){
      this.choosedItem = increased;
  }
}

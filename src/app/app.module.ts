import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { MainListComponent } from './main-list/main-list.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { OneItemComponent } from './one-item/one-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    SocialInfoComponent,
    WeatherInfoComponent,
    OneItemComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

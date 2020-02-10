import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { MainListComponent } from './main-list/main-list.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { OneItemComponent } from './one-item/one-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material';
import { FilterTypePipe } from './main-list/filter-type/filter-type.pipe';
import { PhonePipe } from './one-item/phone/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    SocialInfoComponent,
    WeatherInfoComponent,
    OneItemComponent,
    FilterTypePipe,
    PhonePipe
  ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatListModule,
        MatButtonToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ClockComponent]
})
export class AppModule { }

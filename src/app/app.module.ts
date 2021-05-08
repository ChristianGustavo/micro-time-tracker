import { DOCUMENT } from '@angular/common';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule implements DoBootstrap {

  private microApps = [
    'header',
    'clock',
    'digital-clock',
    'button',
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngDoBootstrap(appRef: ApplicationRef): void {
    this.addMicroScripts();
    appRef.bootstrap(AppComponent);
  }

  private addMicroScripts(): void {
    this.microApps.forEach(app => {
      const script = this.document.createElement('script');
      script.src = `assets/micro-time-tracker/${app}/main.js`;

      this.document.body.appendChild(script);
    });
  }

}

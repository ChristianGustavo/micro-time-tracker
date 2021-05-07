import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DigitalClockComponent } from './digital-clock/digital-clock.component';

@NgModule({
  declarations: [ DigitalClockComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    if (!customElements.get('micro-digital-clock')) {
      const digitalClockCustomElement = createCustomElement(DigitalClockComponent, { injector: this.injector });
      customElements.define('micro-digital-clock', digitalClockCustomElement);
    }
  }

}

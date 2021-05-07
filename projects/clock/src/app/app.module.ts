import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [ ClockComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(ClockComponent);

    const microName = 'micro-clock';

    if (!customElements.get(microName)) {
      const clockCustomElement = createCustomElement(ClockComponent, { injector: this.injector });
      customElements.define(microName, clockCustomElement);
    }
  }

}

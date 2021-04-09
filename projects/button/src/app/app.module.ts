import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ ButtonComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const buttonCustomElement = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('micro-button', buttonCustomElement);
  }

}

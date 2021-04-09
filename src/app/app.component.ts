import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private html!: HTMLElement;
  private microApps = [
    'button'
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.selectHTMLElement();
    this.addMicroScripts();
  }

  private selectHTMLElement(): void {
    this.html = this.renderer.selectRootElement('html', true);
  }

  private addMicroScripts(): void {
    this.microApps.forEach(app => {
      const script = this.document.createElement('script');
      script.src = `assets/micro-time-tracker/${app}/main.js`;

      this.document.body.appendChild(script);
    });
  }

  toggleDarkMode(): void {
    this.html.classList.toggle('dark');
  }
}

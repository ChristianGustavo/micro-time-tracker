import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  html!: HTMLElement;

  constructor(
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.selectHTMLElement();
  }

  private selectHTMLElement(): void {
    this.html = this.renderer.selectRootElement('html', true);
  }

  toggleDarkMode(): void {
    this.html.classList.toggle('dark');
  }

  signUp(): void {

  }

}

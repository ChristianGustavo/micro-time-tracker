import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private html!: HTMLElement;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.selectHTMLElement();
  }

  private selectHTMLElement(): void {
    this.html = this.renderer.selectRootElement('html', true);
  }

  toggleDarkMode(): void {
    this.html.classList.toggle('dark');
  }

}

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const script = this.document.createElement('script');
    script.src = 'assets/micro-time-tracker/button/main.js';

    this.document.body.appendChild(script);
  }

  log(): void {
    console.log('log');
  }
}

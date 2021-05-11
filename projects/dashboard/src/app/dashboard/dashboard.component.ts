import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="clock-container">
      <micro-clock></micro-clock>
      <micro-digital-clock></micro-digital-clock>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent { }

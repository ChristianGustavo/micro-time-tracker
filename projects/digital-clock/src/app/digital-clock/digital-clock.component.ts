import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ABBREVIATED_MONTHS_PT_BR, DAYS_OF_WEEK_PT_BR } from '../shared/constants';

interface DigitalClockDateTime {
  time: string;
  date: string;
  day: number;
}

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        animate('0.5s ease-in', keyframes([
          style({ transform: 'translateY(+3rem)', opacity: 0 }),
          style({ transform: 'translateY(0)', opacity: 1 })
        ]))
      ])
    ])
  ]
})
export class DigitalClockComponent implements OnInit {

  dateAndTime$: Observable<DigitalClockDateTime> | undefined;

  ngOnInit(): void {
    this.fillDateAndTime();
  }

  fillDateAndTime(): void {
    this.dateAndTime$ = interval(1000)
      .pipe(
        map(() => {
          const actualDate = new Date();

          const time = Intl
            .DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' })
            .format(actualDate);

          const date = `${DAYS_OF_WEEK_PT_BR[actualDate.getDay()]}, ${ABBREVIATED_MONTHS_PT_BR[actualDate.getMonth()]}`;

          const day = actualDate.getDate();

          return { time, date, day };
        })
      );
  }

}

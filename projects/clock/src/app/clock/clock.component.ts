import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IClockDate } from './../models/clock-date.interface';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit {

  @ViewChild('hour') hour!: ElementRef;
  @ViewChild('minute') minute!: ElementRef;
  @ViewChild('second') second!: ElementRef;

  private readonly MIN_NUM = 0;
  private readonly MAX_NUM_MINUTES_SECONDS = 59;
  private readonly MAX_NUM_HOUR = 11;
  private readonly INTERVAL_TIMER = 1000;

  ngOnInit(): void {
    interval(this.INTERVAL_TIMER)
      .pipe(
        tap(() => this.setTime())
      )
      .subscribe();
  }

  setTime(): void {
    const { hours, minutes, seconds } = this.retrieveSecondsHoursAndMinutes();

    this.hour.nativeElement.style.transform = this.calculateTransform(hours, this.MAX_NUM_HOUR);
    this.minute.nativeElement.style.transform = this.calculateTransform(minutes, this.MAX_NUM_MINUTES_SECONDS);
    this.second.nativeElement.style.transform = this.calculateTransform(seconds, this.MAX_NUM_MINUTES_SECONDS);
  }

  private retrieveSecondsHoursAndMinutes(): IClockDate {
    const date = new Date();

    return {
      seconds: date.getSeconds(),
      hours: date.getHours(),
      minutes: date.getMinutes()
    };
  }

  private calculateTransform(time: number, maxNumber: number): string {
    return `translate(-50%, -100%) rotate(${this.scale(time, this.MIN_NUM, maxNumber, this.MIN_NUM, 360)}deg)`;
  }

  private scale(
    num: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ): number {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

}

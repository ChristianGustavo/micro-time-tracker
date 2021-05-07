import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClockComponent } from './digital-clock.component';

describe('DigitalClockComponent', () => {
  let component: DigitalClockComponent;
  let fixture: ComponentFixture<DigitalClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill time, date and day', done => {
    component.dateAndTime$?.subscribe(({ time, date, day }) => {
        const dateTest = new Date();

        expect(time).toMatch(/\d{2}:\d{2}?\s[A-Z]{2}/);
        expect(date).toBeDefined();
        expect(day).toBe(dateTest.getDate());

        done();
      }
    );
  });
});

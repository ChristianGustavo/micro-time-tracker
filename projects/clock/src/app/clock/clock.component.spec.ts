import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ClockComponent } from './clock.component';

describe('ClockComponent', () => {
  let component: ClockComponent;
  let fixture: ComponentFixture<ClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill transform property of html elements', fakeAsync(() => {
    const defaultTransformStyle = 'translate(-50%, -100%) rotate(';

    component.ngOnInit();

    tick(2000);

    expect(component.hour.nativeElement.style.transform).toContain(defaultTransformStyle);
    expect(component.minute.nativeElement.style.transform).toContain(defaultTransformStyle);
    expect(component.second.nativeElement.style.transform).toContain(defaultTransformStyle);

    component.interval$?.unsubscribe();
  }));
});

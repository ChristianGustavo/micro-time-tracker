import { DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
    });

    it('should select html element and store in instance variable', () => {
      const renderer = fixture.componentRef.injector.get(Renderer2);
      const spyRenderer = spyOn(renderer, 'selectRootElement');

      component.ngOnInit();

      expect(spyRenderer).toHaveBeenCalledWith('html', true);
    });
  });

  describe('toggleDarkMode', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
    });

    it('should toggle class dark in html element', () => {
      const className = {
        classList: {
          toggle: jasmine.createSpy()
        }
      };
      const renderer = fixture.componentRef.injector.get(Renderer2);
      spyOn(renderer, 'selectRootElement').and.returnValue(className);

      component.ngOnInit();
      component.toggleDarkMode();

      expect(className.classList.toggle).toHaveBeenCalledWith('dark');
    });
  });
});

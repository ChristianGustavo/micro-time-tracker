import { DOCUMENT } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
    });

    it('should select html element and store in instance variable', () => {
      const renderer = fixture.componentRef.injector.get(Renderer2);
      const spyRenderer = spyOn(renderer, 'selectRootElement');

      app.ngOnInit();

      expect(spyRenderer).toHaveBeenCalledWith('html', true);
    });

    it('should append scripts to body', () => {
      const documentEl = fixture.componentRef.injector.get(DOCUMENT);
      const script = document.createElement('script');
      const spyCreateElement = spyOn(documentEl, 'createElement').and.returnValue(script);

      app.ngOnInit();

      expect(spyCreateElement).toHaveBeenCalledWith('script');
    });
  });

  describe('toggleDarkMode', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
    });

    it('should toggle class dark in html element', () => {
      const className = {
        classList: {
          toggle: jasmine.createSpy()
        }
      };
      const renderer = fixture.componentRef.injector.get(Renderer2);
      spyOn(renderer, 'selectRootElement').and.returnValue(className);

      app.ngOnInit();
      app.toggleDarkMode();

      expect(className.classList.toggle).toHaveBeenCalledWith('dark');
    });
  });

});

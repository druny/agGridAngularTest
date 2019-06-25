import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { HeaderCheckboxComponent } from './header-checkbox/header-checkbox.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        RouterTestingModule,
        AgGridModule.withComponents([
          LinkComponent,
          HeaderCheckboxComponent,
          MyGridApplicationComponent,
        ]),
      ],
      declarations: [
        AppComponent,
        LinkComponent,
        HeaderCheckboxComponent,
        MyGridApplicationComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});

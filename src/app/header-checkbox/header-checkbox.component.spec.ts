import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { HeaderCheckboxComponent } from './header-checkbox.component';

describe('HeaderCheckboxComponent', () => {
  let component: HeaderCheckboxComponent;
  let fixture: ComponentFixture<HeaderCheckboxComponent>;
  let inputElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        RouterTestingModule,
        AgGridModule.withComponents([HeaderCheckboxComponent]),
      ],
      declarations: [HeaderCheckboxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCheckboxComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

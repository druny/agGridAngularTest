import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderCheckboxComponent } from './header-checkbox.component';

describe('HeaderCheckboxComponent', () => {
  let component: HeaderCheckboxComponent;
  let fixture: ComponentFixture<HeaderCheckboxComponent>;
  let inputElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  it('toggleSelection', () => {
    expect(component.taskService.isSelectedAll).toBe(false, 'setting to unchecked');
    inputElement.click();
    fixture.detectChanges();
    expect(component.toggleSelection).toBe(true, 'setting to checked');

    inputElement.click();
    fixture.detectChanges();
    expect(component.taskService.isSelectedAll).toBe(false, 'setting to unchecked');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDebtComponent } from './add-debt.component';

describe('AddDebtComponent', () => {
  let component: AddDebtComponent;
  let fixture: ComponentFixture<AddDebtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDebtComponent]
    });
    fixture = TestBed.createComponent(AddDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

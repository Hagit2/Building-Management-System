import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsManagerComponent } from './payments-manager.component';

describe('PaymentsManagerComponent', () => {
  let component: PaymentsManagerComponent;
  let fixture: ComponentFixture<PaymentsManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsManagerComponent]
    });
    fixture = TestBed.createComponent(PaymentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

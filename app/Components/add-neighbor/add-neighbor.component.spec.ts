import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeighborComponent } from './add-neighbor.component';

describe('AddNeighborComponent', () => {
  let component: AddNeighborComponent;
  let fixture: ComponentFixture<AddNeighborComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNeighborComponent]
    });
    fixture = TestBed.createComponent(AddNeighborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNeighborComponent } from './home-neighbor.component';

describe('HomeNeighborComponent', () => {
  let component: HomeNeighborComponent;
  let fixture: ComponentFixture<HomeNeighborComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNeighborComponent]
    });
    fixture = TestBed.createComponent(HomeNeighborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

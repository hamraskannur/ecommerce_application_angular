import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCartComponent } from './one-cart.component';

describe('OneCartComponent', () => {
  let component: OneCartComponent;
  let fixture: ComponentFixture<OneCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneCartComponent]
    });
    fixture = TestBed.createComponent(OneCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedAmountComponent } from './requested-amount.component';

describe('RequestedAmountComponent', () => {
  let component: RequestedAmountComponent;
  let fixture: ComponentFixture<RequestedAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

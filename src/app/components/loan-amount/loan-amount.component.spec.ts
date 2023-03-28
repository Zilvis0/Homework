import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAmountComponent } from './loan-amount.component';

describe('LoanAmountComponent', () => {
  let component: LoanAmountComponent;
  let fixture: ComponentFixture<LoanAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

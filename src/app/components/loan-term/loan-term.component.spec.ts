import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTermComponent } from './loan-term.component';

describe('LoanTermComponent', () => {
  let component: LoanTermComponent;
  let fixture: ComponentFixture<LoanTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

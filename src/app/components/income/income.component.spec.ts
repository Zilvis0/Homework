import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IncomeComponent } from './income.component';

describe('IncomeComponent', () => {
  let component: IncomeComponent;
  let fixture: ComponentFixture<IncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [IncomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display income value', () => {
    const incomeInput = fixture.nativeElement.querySelector('#income');
    component.income = 500000;
    fixture.detectChanges();
    expect(incomeInput.value).toBe('500');
  });

  it('should emit income value when input changes', () => {
    spyOn(component.incomeChange, 'emit');
    const incomeInput = fixture.nativeElement.querySelector('#income');
    incomeInput.value = '600';
    incomeInput.dispatchEvent(new Event('input'));
    expect(component.incomeChange.emit).toHaveBeenCalledWith(600);
  });
});

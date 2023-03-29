import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IncomeComponent } from '../income/income.component';
import { RequestedAmountComponent } from '../requested-amount/requested-amount.component';
import { LoanTermComponent } from '../loan-term/loan-term.component';
import { ChildrenComponent } from '../children/children.component';
import { CoapplicantComponent } from '../coapplicant/coapplicant.component';

interface FormData {
  monthlyIncome: number;
  requestedAmount: number;
  loanTerm: number;
  children: string;
  coapplicant: string;
  loanAmount: number;
  interestRate: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @ViewChild(IncomeComponent) monthlyIncome!: IncomeComponent;
  @ViewChild(RequestedAmountComponent)
  requestedAmount!: RequestedAmountComponent;
  @ViewChild(LoanTermComponent) loanTerm!: LoanTermComponent;
  @ViewChild(ChildrenComponent) children!: ChildrenComponent;
  @ViewChild(CoapplicantComponent) coapplicant!: CoapplicantComponent;

  formData: FormData = {
    monthlyIncome: 500000,
    requestedAmount: 20000000,
    loanTerm: 36,
    children: 'NONE',
    coapplicant: 'NONE',
    loanAmount: 0,
    interestRate: 0,
  };

  constructor(private apiService: ApiService) {}

  isFormValid(): boolean {
    return (
      this.formData.monthlyIncome >= 500000 &&
      this.formData.requestedAmount >= 20000000 &&
      this.formData.loanTerm >= 36 &&
      this.formData.loanTerm <= 360
    );
  }

  resetOutput(): void {
    this.formData.loanAmount = 0;
    this.formData.interestRate = 0;
  }

  onSubmit(): void {
    const formData = {
      monthlyIncome: this.formData.monthlyIncome,
      requestedAmount: this.formData.requestedAmount,
      loanTerm: this.formData.loanTerm,
      children: this.formData.children,
      coapplicant: this.formData.coapplicant,
    };
    this.apiService.postForm(formData).subscribe(
      (response: any) => {
        const components = [
          this.monthlyIncome,
          this.requestedAmount,
          this.loanTerm,
          this.children,
          this.coapplicant,
        ];

        this.formData.loanAmount = response.loanAmount;
        this.formData.interestRate = response.interestRate;

        for (const component of components) {
          component.errorMessage = '';
          component.isHighlighted = false;
        }
      },
      (error) => {
        error.error.fields.map((obj: { params: string; message: string }) => {
          switch (obj.params) {
            case 'monthlyIncome':
              this.monthlyIncome.highlightError();
              this.monthlyIncome.errorMessage = obj.message;
              this.resetOutput();
              break;
            case 'requestedAmount':
              this.requestedAmount.highlightError();
              this.requestedAmount.errorMessage = obj.message;
              this.resetOutput();
              break;
            case 'loanTerm':
              this.loanTerm.highlightError();
              this.loanTerm.errorMessage = obj.message;
              this.resetOutput();
              break;
            case 'children':
              this.children.highlightError();
              this.children.errorMessage = obj.message;
              this.resetOutput();
              break;
            case 'coapplicant':
              this.coapplicant.highlightError();
              this.coapplicant.errorMessage = obj.message;
              this.resetOutput();
              break;
            default:
              break;
          }
        });
      },
      () => {}
    );
  }
}

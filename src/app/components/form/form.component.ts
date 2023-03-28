import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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
        console.log('Request successful', response);
        this.formData.loanAmount = response.loanAmount;
        this.formData.interestRate = response.interestRate;
      },
      (error) => {
        console.log('Error occurred', error);
        error.error.fields.map((obj: { params: string; message: string }) =>
          console.log(obj.message)
        );
      },
      () => {
        console.log('Request completed');
      }
    );
  }
}

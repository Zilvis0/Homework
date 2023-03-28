import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface FormData {
  monthlyIncome: number;
  requestedAmount: number;
  loanTerm: number;
  children: string;
  coapplicant: string;
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
  };

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    const formData = {
      monthlyIncome: this.formData.monthlyIncome,
      requestedAmount: this.formData.requestedAmount,
      loanTerm: this.formData.loanTerm,
      children: this.formData.children,
      coapplicant: this.formData.coapplicant,
    };

    this.apiService.postForm(formData).subscribe(
      (response) => {
        console.log('Request successful', response);
      },
      (error) => {
        console.log('Error occurred', error);
      },
      () => {
        console.log('Request completed');
      }
    );
  }
}

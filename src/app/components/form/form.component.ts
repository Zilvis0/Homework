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
    monthlyIncome: 500,
    requestedAmount: 20000,
    loanTerm: 36,
    children: 'NONE',
    coapplicant: 'NONE',
  };

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    const formData = new FormData();
    formData.append('monthlyIncome', this.formData.monthlyIncome.toString());
    formData.append(
      'requestedAmount',
      this.formData.requestedAmount.toString()
    );
    formData.append('loanTerm', this.formData.loanTerm.toString());
    formData.append('children', this.formData.children);
    formData.append('coapplicant', this.formData.coapplicant);

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

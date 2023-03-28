import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { IncomeComponent } from './components/income/income.component';
import { RequestedAmountComponent } from './components/requested-amount/requested-amount.component';
import { LoanTermComponent } from './components/loan-term/loan-term.component';
import { ChildrenComponent } from './components/children/children.component';
import { CoapplicantComponent } from './components/coapplicant/coapplicant.component';
import { LoanAmountComponent } from './components/loan-amount/loan-amount.component';
import { InterestRateComponent } from './components/interest-rate/interest-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    IncomeComponent,
    RequestedAmountComponent,
    LoanTermComponent,
    ChildrenComponent,
    CoapplicantComponent,
    LoanAmountComponent,
    InterestRateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

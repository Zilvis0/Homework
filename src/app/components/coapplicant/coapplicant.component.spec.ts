import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoapplicantComponent } from './coapplicant.component';

describe('CoapplicantComponent', () => {
  let component: CoapplicantComponent;
  let fixture: ComponentFixture<CoapplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoapplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

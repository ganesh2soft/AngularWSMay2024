import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingtovendorComponent } from './billingtovendor.component';

describe('BillingtovendorComponent', () => {
  let component: BillingtovendorComponent;
  let fixture: ComponentFixture<BillingtovendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingtovendorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingtovendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

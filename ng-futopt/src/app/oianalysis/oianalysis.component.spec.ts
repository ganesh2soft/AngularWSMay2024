import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OianalysisComponent } from './oianalysis.component';

describe('OianalysisComponent', () => {
  let component: OianalysisComponent;
  let fixture: ComponentFixture<OianalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OianalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OianalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

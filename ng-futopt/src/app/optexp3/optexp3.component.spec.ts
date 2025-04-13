import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Optexp3Component } from './optexp3.component';

describe('Optexp3Component', () => {
  let component: Optexp3Component;
  let fixture: ComponentFixture<Optexp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Optexp3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Optexp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

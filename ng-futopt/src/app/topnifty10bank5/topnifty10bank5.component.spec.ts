import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topnifty10bank5Component } from './topnifty10bank5.component';

describe('Topnifty10bank5Component', () => {
  let component: Topnifty10bank5Component;
  let fixture: ComponentFixture<Topnifty10bank5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Topnifty10bank5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Topnifty10bank5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

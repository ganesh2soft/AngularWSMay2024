import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefootComponent } from './pagefoot.component';

describe('PagefootComponent', () => {
  let component: PagefootComponent;
  let fixture: ComponentFixture<PagefootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagefootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagefootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

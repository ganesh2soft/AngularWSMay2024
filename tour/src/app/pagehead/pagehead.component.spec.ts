import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageheadComponent } from './pagehead.component';

describe('PageheadComponent', () => {
  let component: PageheadComponent;
  let fixture: ComponentFixture<PageheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

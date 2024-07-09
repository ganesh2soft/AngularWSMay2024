import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavbarrComponent } from './sidenavbarr.component';

describe('SidenavbarrComponent', () => {
  let component: SidenavbarrComponent;
  let fixture: ComponentFixture<SidenavbarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavbarrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavbarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

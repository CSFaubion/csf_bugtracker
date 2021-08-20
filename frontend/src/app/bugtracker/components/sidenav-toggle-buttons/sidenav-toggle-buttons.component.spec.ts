import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavToggleButtonsComponent } from './sidenav-toggle-buttons.component';

describe('SidenavToggleButtonsComponent', () => {
  let component: SidenavToggleButtonsComponent;
  let fixture: ComponentFixture<SidenavToggleButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavToggleButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavToggleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

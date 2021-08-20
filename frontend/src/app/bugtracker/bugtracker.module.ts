import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugtrackerRoutingModule } from './bugtracker-routing.module';
import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './components/login/login.component';
import { SidenavToggleButtonsComponent } from './components/sidenav-toggle-buttons/sidenav-toggle-buttons.component';
import { LandingPageComponent } from './components';
import { BugsComponent } from './components/bugs/bugs.component';

@NgModule({
  declarations: [LoginComponent, LandingPageComponent, SidenavToggleButtonsComponent, BugsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BugtrackerRoutingModule
  ]
})
export class BugtrackerModule { }

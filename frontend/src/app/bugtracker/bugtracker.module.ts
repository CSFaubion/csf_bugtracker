import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugtrackerRoutingModule } from './bugtracker-routing.module';
import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './components/login/login.component';
import { SidenavToggleButtonsComponent } from './components/sidenav-toggle-buttons/sidenav-toggle-buttons.component';
import { LandingPageComponent } from './components';
import { BugsComponent } from './components/bugs/bugs.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    LandingPageComponent,
    SidenavToggleButtonsComponent,
    BugsComponent,
    UserManagementComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BugtrackerRoutingModule,
    ReactiveFormsModule,
  ],
})
export class BugtrackerModule {}

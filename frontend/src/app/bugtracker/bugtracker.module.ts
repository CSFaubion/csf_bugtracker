import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BugtrackerRoutingModule } from './bugtracker-routing.module';
import { MaterialModule } from '../material/material.module';

import { SidenavToggleButtonsComponent } from './components/sidenav-toggle-buttons/sidenav-toggle-buttons.component';
import { LandingPageComponent } from './components';
import { BugsComponent } from './components/bugs/bugs.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    SidenavToggleButtonsComponent,
    BugsComponent,
    UserManagementComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BugtrackerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
})
export class BugtrackerModule {}

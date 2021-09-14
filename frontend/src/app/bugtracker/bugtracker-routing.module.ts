import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsComponent } from './components/bugs/bugs.component';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LoginComponent } from '../auth/login/login.component';
import { AuthGuard } from './route-guards/auth.guard';

const bugRoutes: Routes = [
  {
    path: 'bugtracker',
    component: LandingPageComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'user-management',
        component: UserManagementComponent,
      },
      {
        path: 'bugs',
        component: BugsComponent,
      },
      {
        path: 'user',
        component: UserDetailComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'user',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(bugRoutes)],
  exports: [RouterModule],
})
export class BugtrackerRoutingModule {}

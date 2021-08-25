import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsComponent } from './components/bugs/bugs.component';

import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LoginComponent } from './components/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
    {
        path: 'bugtracker',
        component: LandingPageComponent,
        children: [
            {
                path: 'user-management', component: UserManagementComponent
            },
            {
                path: 'bugs', component: BugsComponent
            },
            {
                path: 'login', component: LoginComponent
            },
            {
                path: '**', redirectTo: 'login', pathMatch: 'full'
            }   
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BugtrackerRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
        path: 'bugtracker',
        component: LandingPageComponent,
        children: [
            {
                path: 'login', component: LoginComponent
            },
            {
                path: '', redirectTo: 'login', pathMatch: 'full'
            }
        ]
    },

    { path: 'bugtracker/login', component: LoginComponent, outlet: 'bug-outlet' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BugtrackerRoutingModule { }

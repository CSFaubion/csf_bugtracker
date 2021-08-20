import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'bugtracker', component: LandingPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BugtrackerRoutingModule { }

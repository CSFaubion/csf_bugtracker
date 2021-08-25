import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugtrackerModule } from './bugtracker/bugtracker.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'bugtracker', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

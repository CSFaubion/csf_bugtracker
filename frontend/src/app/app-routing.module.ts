import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugtrackerModule } from './bugtracker/bugtracker.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'bugtracker', pathMatch: 'full'
  }
];

@NgModule({
  // TODO: replace imports array for production.
  // imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

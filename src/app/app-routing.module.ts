import { GuardService } from './service/guard.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "dashboard", component: UserDashboardComponent, canActivate: [GuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

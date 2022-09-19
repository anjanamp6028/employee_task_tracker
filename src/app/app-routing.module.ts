import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard'
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashBoardComponent, canActivate: [AuthenticationGuard] },
  { path: 'tasks/:id', component: EmployeeTasksComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

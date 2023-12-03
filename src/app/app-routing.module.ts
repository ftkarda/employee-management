import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
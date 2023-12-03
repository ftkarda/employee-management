import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Employee } from '../models/employees-data.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // private employees: Employee[] = [];
  // private employeesSubject = new BehaviorSubject<Employee[]>(this.employees);
  groups: string[] = ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'Group G', 'Group H', 'Group I', 'Group J'];

  // getEmployees() {
  //   return this.employeesSubject.asObservable();
  // }

  // addEmployee(employee: Employee) {
  //   this.employees.push(employee);
  //   this.employeesSubject.next([...this.employees]);
  // }

  getGroups(): string[] {
    return this.groups;
  }

}

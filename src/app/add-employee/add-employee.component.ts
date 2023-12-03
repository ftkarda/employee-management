import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { NotifService } from '../services/notif.service';
// import { Employee } from '../models/employees-data.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  // employees: Employee[] = [];
  filteredGroups: Observable<string[]> | undefined;
  breakpoint: number = 0;
  groups: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeeService,  private notifService: NotifService) { }

  ngOnInit() {
    this.setGroup()
    this.validationForm()
    this.searchGroup()
    this.setBreakPoints()
  }

  submitForm() {
    // const employeeData = this.employeeForm.value as Employee;
    // this.employeeService.addEmployee(employeeData);
    this.navigateToEmployeeList()
    this.notifService.notifSuccessAlert('Success Submit');
    this.employeeForm.reset();
  }

  dateNotExceedTodayValidator(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = control.value;

      if (selectedDate) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
          return { dateExceedsToday: true };
        }
      }

      return null;
    };
  }

  filterGroups(value: string): string[] {
    const filterValue = value;
    return this.groups.filter(group => group.toLowerCase().includes(filterValue));
  }

  groupValidator(groups: string[]): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedGroup = control.value;
      return groups.includes(selectedGroup) ? null : { invalidGroup: true };
    };
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 2 : 8;
  }

  navigateToEmployeeList() {
    this.router.navigate(['/employee-list']);
  }

  validationForm() {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: [null, [Validators.required, this.dateNotExceedTodayValidator()]],
      basicSalary: ['', [Validators.required]],
      status: ['', Validators.required],
      group: [null, [Validators.required, this.groupValidator(this.groups)]],
      description: ['', Validators.required],
    });
  }

  setGroup() {
    this.groups = this.employeeService.getGroups();
  }

  searchGroup() {
    this.filteredGroups = this.employeeForm.get('group')!.valueChanges.pipe(
      startWith(''),
      map(value => this.filterGroups(value))
    );
  }

  setBreakPoints() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Employee, generateDummyData } from '../models/employees-data.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  dataSource!: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'actions'];
  searchValue: string = '';

  @ViewChild(MatPaginator,  { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort,  { static: false }) sort!: MatSort;

  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Employee>(generateDummyData());
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  async applyFilter() {
    const filterValue = await this.searchValue.trim().toLowerCase();
    console.log(filterValue, 'DEBUG:FilterValue')
    this.dataSource.filter = filterValue;
    console.log(this.dataSource.filter, 'DEBUG:DataSourceFilter')
  }

  navigateToAddEmployee() {
    this.router.navigate(['/add-employee']);
  }

  viewEmployeeDetails(employee: Employee): void {
    this.router.navigate(['/employee-detail', employee.id], { state: { employee } });
  }
}
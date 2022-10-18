import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeGetResponse } from './models/employee-get-all-response';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  // Table
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<EmployeeGetResponse>();
  displayedColumns: string[] = [
    'id',
    'name',
    'employeeHoursForEachWorkdayType',
  ];

  // Pagination
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  constructor(private readonly employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}

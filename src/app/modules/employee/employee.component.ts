import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeGetResponse } from './models/employee-get-all-response';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  // private destroy$ = new Subject<void>();
  // employeesData$ = new Observable<EmployeeGetResponse[]>();
  employeeData: EmployeeGetResponse[] = [];
  dataToShow: EmployeeGetResponse[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<EmployeeGetResponse>();

  displayedColumns: string[] = ['id', 'name', 'employeeHoursForEachWorkdayType'];

  // Pagination
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  constructor(private readonly employeeService: EmployeeService) {}

  ngOnInit(): void {
    // this.employeesData$ = this.employeeService.getAll();
    this.employeeService.getAll().subscribe(data => {
      this.employeeData = data;

      this.dataSource.data = this.employeeData;
      this.dataSource.paginator = this.paginator;
      // const from = this.pageIndex * this.pageSize;
      // const to = from + this.pageSize;
      // this.dataToShow = this.employeeData.slice(from, to);
    });
  }
}

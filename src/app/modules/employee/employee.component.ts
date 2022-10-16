import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
import { EmployeeGetResponse } from './models/employee-get-all-response';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  private destroy$ = new Subject<void>();
  employees$: Observable<EmployeeGetResponse[]> = new Observable();

  constructor(private readonly employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService.getAll();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

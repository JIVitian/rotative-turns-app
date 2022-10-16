import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  private destroy$ = new Subject<void>();

  constructor(private readonly employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => console.log(response),
        error: error => console.error(error),
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

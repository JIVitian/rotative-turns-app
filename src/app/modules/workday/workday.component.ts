import { Component, ViewChild } from '@angular/core';
import { WorkdayService } from './workday.service';
import { Workday } from './models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-workday',
  templateUrl: './workday.component.html',
  styleUrls: ['./workday.component.css'],
})
export class WorkdayComponent {
  // Table
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Workday>();
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'date',
    'timeFrom',
    'timeTo',
  ];

  // Pagination
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  constructor(private readonly workdayService: WorkdayService) {}

  ngOnInit(): void {
    this.workdayService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}

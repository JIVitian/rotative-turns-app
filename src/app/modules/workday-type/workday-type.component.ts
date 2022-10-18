import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkdayTypeService } from './workday-type.service';
import { WorkdayType } from './models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-workday-type',
  templateUrl: './workday-type.component.html',
  styleUrls: ['./workday-type.component.css'],
})
export class WorkdayTypeComponent implements OnInit {
  // Table
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<WorkdayType>();
  displayedColumns: string[] = ['id', 'name'];

  // Pagination
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25];

  constructor(private readonly workdayTypeService: WorkdayTypeService) {}

  ngOnInit(): void {
    this.workdayTypeService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}

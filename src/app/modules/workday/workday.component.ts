import { Component, ViewChild } from '@angular/core';
import { WorkdayService } from './workday.service';
import { UpdateWorkdayDTO, Workday } from './models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { WorkdayUpdateComponent } from './pages/workday-update';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ServerError } from 'src/app/models';

@Component({
  selector: 'app-workday',
  templateUrl: './workday.component.html',
  styleUrls: ['./workday.component.css'],
})
export class WorkdayComponent {
  // Modals
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('updateSuccessSwal') updateSuccessSwal: SwalComponent;
  @ViewChild('deleteConfirmationSwal') deleteConfirmationSwal: SwalComponent;
  @ViewChild('deleteSuccessSwal') deleteSuccessSwal: SwalComponent;
  @ViewChild('deleteErrorSwal') deleteErrorSwal: SwalComponent;

  // Table
  dataSource = new MatTableDataSource<Workday>();
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'date',
    'timeFrom',
    'timeTo',
    'actions',
  ];

  // Pagination
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  constructor(
    private readonly workdayService: WorkdayService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadSourceData();
  }

  loadSourceData(): void {
    this.workdayService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  onEditClick(workday: Workday): void {
    // Open the modal with the workday data
    const dialogRef = this.dialog.open(WorkdayUpdateComponent, {
      width: '250px',
      data: workday as UpdateWorkdayDTO,
    });

    // If the workday was updated, refresh the table
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      this.loadSourceData();
      this.updateSuccessSwal.fire();
    });
  }

  onDeleteClick(id: number): void {
    // Open the delete confirmation modal
    this.deleteConfirmationSwal.fire().then(({ isConfirmed }) => {
      // If the user confirmed the deletion, delete the workday
      // else, do nothing
      if (!isConfirmed) return;

      this.workdayService.delete(id).subscribe({
        next: () => {
          this.loadSourceData();
          this.deleteSuccessSwal.fire();
        },
        error: ({ error }: { error: ServerError }) => {
          if (error.message) {
            this.deleteErrorSwal.text = error.message;
          }

          this.deleteErrorSwal.fire();
        },
      });
    });
  }
}

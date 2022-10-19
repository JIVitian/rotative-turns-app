import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ServerError } from 'src/app/models';
import { UpdateWorkdayDTO } from '../../models';
import { WorkdayService } from '../../workday.service';

@Component({
  selector: 'app-workday-update',
  templateUrl: './workday-update.component.html',
  styleUrls: ['./workday-update.component.css'],
})
export class WorkdayUpdateComponent implements OnInit {
  updateWorkdayForm: FormGroup;
  @ViewChild('errorSwal')
  public readonly errorSwal: SwalComponent;

  constructor(
    public dialogRef: MatDialogRef<WorkdayUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public workday: UpdateWorkdayDTO,
    private formBuilder: FormBuilder,
    private workdayService: WorkdayService
  ) {}

  ngOnInit(): void {
    this.updateWorkdayForm = this.formBuilder.group({
      timeFrom: [this.workday.timeFrom, [Validators.required]],
      timeTo: [this.workday.timeTo, [Validators.required]],
    });
  }

  isFormValid(): boolean {
    // Get both times as numbers
    const timeFrom = +this.workday.timeFrom.toString().split(':')[0];
    const timeTo = +this.workday.timeTo.toString().split(':')[0];

    // Check validity of the hours selected
    return this.updateWorkdayForm.valid && timeFrom <= timeTo;
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.workday.timeFrom = this.workday.timeFrom.toString();
    this.workday.timeTo = this.workday.timeTo.toString();

    this.workdayService.update(this.workday).subscribe({
      next: () => this.dialogRef.close(true),
      error: ({ error }: { error: ServerError }) => {
        if (error.message) {
          this.errorSwal.text = error.message;
        }

        this.errorSwal.fire();
      },
    });
  }
}

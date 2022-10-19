import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import { ServerError } from 'src/app/models';
import { Employee, EmployeeService } from 'src/app/modules/employee';
import { WorkdayType, WorkdayTypeService } from 'src/app/modules/workday-type';
import { CreateWorkdayDTO, Workday } from '../../models';
import { WorkdayService } from '../../workday.service';

@Component({
  selector: 'app-workday-editor',
  templateUrl: './workday-editor.component.html',
  styleUrls: ['./workday-editor.component.css'],
})
export class WorkdayEditorComponent implements OnInit {
  workdays$: Observable<Workday[]>;
  workdayTypes$: Observable<WorkdayType[]>;
  employees$: Observable<Employee[]>;

  workdayForm: FormGroup;

  @ViewChild('successSwal')
  public readonly successSwal: SwalComponent;
  @ViewChild('errorSwal')
  public readonly errorSwal: SwalComponent;

  constructor(
    private workdayService: WorkdayService,
    private workdayTypeService: WorkdayTypeService,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.workdayForm = this.formBuilder.group({
      employee: [null, [Validators.required]],
      type: [null, [Validators.required]],
      date: [null, [Validators.required]],
      timeFrom: [null, [Validators.required]],
      timeTo: [null, [Validators.required]],
    });

    this.workdays$ = this.workdayService.getAll();
    this.workdayTypes$ = this.workdayTypeService.getAll();
    this.employees$ = this.employeeService.getAllEntity();
  }

  onSelectionChange(selection: any, control: string): void {
    this.workdayForm.controls[control]?.setValue(selection.value);
  }

  onSubmit() {
    const { date } = this.workdayForm.value;

    const newWorkday: CreateWorkdayDTO = {
      ...this.workdayForm.value,
      date: formatDate(date, 'dd/MM/yyyy', 'en'),
    };

    this.workdayService.create(newWorkday).subscribe({
      next: () => this.successSwal.fire(),
      error: ({ error }: { error: ServerError }) => {
        if (error.message) {
          this.errorSwal.text = error.message;
        }

        this.errorSwal.fire();
      },
    });
  }
}

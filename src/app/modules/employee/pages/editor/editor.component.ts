import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  employeeForm: FormGroup;
  @ViewChild('successSwal')
  public readonly successSwal: SwalComponent;
  @ViewChild('errorSwal')
  public readonly errorSwal: SwalComponent;

  constructor(
    formBuilder: FormBuilder,
    private readonly employeeService: EmployeeService
  ) {
    this.employeeForm = formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(/\S/)]],
    });
  }

  onSubmit(): void {
    if (!this.employeeForm.valid) {
      return;
    }

    const newEmployee: Employee = {
      name: this.employeeForm.get('name')?.value,
    };

    this.employeeService.create(newEmployee).subscribe({
      next: () => this.successSwal.fire(),
      error: error => {
        if (error.messasge) {
          this.errorSwal.text = error.message;
        }

        this.errorSwal.fire();
      },
    });
  }

  hasError(field: string): boolean {
    return Boolean(
      this.employeeForm.get(field)?.invalid &&
        (this.employeeForm.get(field)?.touched ||
          this.employeeForm.get(field)?.dirty)
    );
  }
}

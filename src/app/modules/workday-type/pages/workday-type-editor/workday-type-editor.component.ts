import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ServerError } from 'src/app/models';
import { WorkdayType } from '../../models';
import { WorkdayTypeService } from '../../workday-type.service';

@Component({
  selector: 'app-workday-type-editor',
  templateUrl: './workday-type-editor.component.html',
  styleUrls: ['./workday-type-editor.component.css'],
})
export class WorkdayTypeEditorComponent {
  typeForm: FormGroup;
  @ViewChild('successSwal')
  public readonly successSwal: SwalComponent;
  @ViewChild('errorSwal')
  public readonly errorSwal: SwalComponent;

  constructor(
    formBuilder: FormBuilder,
    private readonly wordayTypeService: WorkdayTypeService
  ) {
    this.typeForm = formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(/\S/)]],
    });
  }

  onSubmit(): void {
    if (!this.typeForm.valid) {
      return;
    }

    const newType: WorkdayType = this.typeForm.value;

    this.wordayTypeService.create(newType).subscribe({
      next: () => this.successSwal.fire(),
      error: ({ error }: { error: ServerError }) => {
        if (error.message) {
          this.errorSwal.text = error.message;
        }

        this.errorSwal.fire();
      },
    });
  }

  hasError(field: string): boolean {
    return Boolean(
      this.typeForm.get(field)?.invalid &&
        (this.typeForm.get(field)?.touched || this.typeForm.get(field)?.dirty)
    );
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { WorkdayRoutingModule } from './workday-routing.module';

import { WorkdayComponent } from './workday.component';
import { WorkdayEditorComponent } from './pages/workday-editor/workday-editor.component';

@NgModule({
  declarations: [WorkdayComponent, WorkdayEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    WorkdayRoutingModule,
  ],
})
export class WorkdayModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { EmployeeEditorComponent } from './pages/editor/employee-editor.component';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [EmployeeComponent, EmployeeEditorComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule,
    SweetAlert2Module,
  ],
})
export class EmployeeModule {}

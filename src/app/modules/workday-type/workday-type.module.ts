import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { WorkdayTypeRoutingModule } from './workday-type-routing.module';
import { WorkdayTypeComponent } from './workday-type.component';

@NgModule({
  declarations: [WorkdayTypeComponent],
  imports: [
    CommonModule,
    WorkdayTypeRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    SweetAlert2Module,
  ],
})
export class WorkdayTypeModule {}

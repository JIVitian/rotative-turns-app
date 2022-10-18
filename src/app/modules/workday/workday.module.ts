import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkdayRoutingModule } from './workday-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkdayComponent } from './workday.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [WorkdayComponent],
  imports: [
    CommonModule,
    WorkdayRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class WorkdayModule { }

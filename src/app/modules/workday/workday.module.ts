import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkdayRoutingModule } from './workday-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkdayComponent } from './workday.component';


@NgModule({
  declarations: [WorkdayComponent],
  imports: [
    CommonModule,
    WorkdayRoutingModule,
    HttpClientModule,
  ]
})
export class WorkdayModule { }

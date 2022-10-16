import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkdayRoutingModule } from './workday-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorkdayRoutingModule,
    HttpClientModule,
  ]
})
export class WorkdayModule { }

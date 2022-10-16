import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeComponent } from './employee.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, EmployeeRoutingModule, HttpClientModule],
})
export class EmployeeModule {}

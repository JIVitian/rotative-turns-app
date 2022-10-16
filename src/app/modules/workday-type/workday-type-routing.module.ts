import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkdayTypeComponent } from './workday-type.component';

const routes: Routes = [
  {
    path: '',
    component: WorkdayTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkdayTypeRoutingModule {}

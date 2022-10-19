import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkdayTypeEditorComponent } from './pages';
import { WorkdayTypeComponent } from './workday-type.component';

const routes: Routes = [
  {
    path: '',
    component: WorkdayTypeComponent,
  },
  {
    path: 'create',
    component: WorkdayTypeEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkdayTypeRoutingModule {}

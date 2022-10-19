import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkdayEditorComponent } from './pages';
import { WorkdayComponent } from './workday.component';

const routes: Routes = [
  { path: '', component: WorkdayComponent },
  {
    path: 'create',
    component: WorkdayEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkdayRoutingModule {}

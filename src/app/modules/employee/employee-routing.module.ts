import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeEditorComponent } from './pages/editor/employee-editor.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  {
    path: 'new',
    component: EmployeeEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}

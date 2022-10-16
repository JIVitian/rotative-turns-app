import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () =>
      import('./modules').then(m => m.EmployeeModule),
  },
  {
    path: 'workday',
    loadChildren: () => import('./modules').then(m => m.WorkdayModule)
  },
  { path: '**', redirectTo: 'employee' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

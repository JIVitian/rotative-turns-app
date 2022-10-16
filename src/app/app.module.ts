import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components';
import { EmployeeModule } from './modules';
import { WorkdayComponent } from './modules/workday/workday.component';
import { WorkdayTypeComponent } from './modules/workday-type/workday-type.component';

@NgModule({
  declarations: [AppComponent, WorkdayComponent, WorkdayTypeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    EmployeeModule,
    NavbarComponent,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

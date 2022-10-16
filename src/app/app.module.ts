import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeModule } from './modules';
import { WorkdayComponent } from './modules/workday/workday.component';

@NgModule({
  declarations: [AppComponent, WorkdayComponent],
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

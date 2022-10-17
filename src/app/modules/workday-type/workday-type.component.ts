import { Component, OnInit } from '@angular/core';
import { WorkdayTypeService } from './workday-type.service';
import { Observable } from 'rxjs';
import { WorkdayType } from './models';

@Component({
  selector: 'app-workday-type',
  templateUrl: './workday-type.component.html',
  styleUrls: ['./workday-type.component.css'],
})
export class WorkdayTypeComponent implements OnInit {
  types$ = new Observable<WorkdayType>();

  constructor(private readonly workdayTypeService: WorkdayTypeService) {}

  ngOnInit(): void {
    this.types$ = this.workdayTypeService.getAll();
  }
}

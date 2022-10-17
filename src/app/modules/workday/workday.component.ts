import { Component, OnInit } from '@angular/core';
import { WorkdayService } from './workday.service';
import { Observable } from 'rxjs';
import { Workday } from './models';

@Component({
  selector: 'app-workday',
  templateUrl: './workday.component.html',
  styleUrls: ['./workday.component.css'],
})
export class WorkdayComponent implements OnInit {
  workdays$ = new Observable<Workday[]>();

  constructor(private readonly workdayService: WorkdayService) {}

  ngOnInit(): void {
    this.workdays$ = this.workdayService.getAll();
  }
}

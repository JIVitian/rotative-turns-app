import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Employee } from './models/employee';
import { EmployeeGetResponse } from './models/employee-get-all-response';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly endpoint = environment.baseUrl + '/employee';

  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Array<EmployeeGetResponse>>(
      environment.baseUrl + '/workday/list/hours-per-workday'
    );
  }

  getAllEntity() {
    return this.httpClient.get<Employee[]>(this.endpoint + '/all');
  }

  getById(id: number) {
    return this.httpClient.get<Employee>(this.endpoint + `/${id}`);
  }

  create(employee: Employee) {
    return this.httpClient.post<Employee>(this.endpoint, employee);
  }
}

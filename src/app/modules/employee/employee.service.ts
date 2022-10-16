import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly endpoint = environment.baseUrl + '/employee';

  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(environment.baseUrl + '/workday/list/hours-per-workday');
  }

  getById(id: number) {
    return this.httpClient.get(this.endpoint + `/${id}`);
  }

  create(employee: Employee) {
    return this.httpClient.post(this.endpoint, employee);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { WorkdayType } from '../workday-type';

@Injectable({
  providedIn: 'root',
})
export class WorkdayTypeService {
  endpoint: string = environment.baseUrl + '/workday/type';

  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.endpoint + '/all');
  }

  getById(id: number) {
    return this.httpClient.get(this.endpoint + `/${id}`);
  }

  create(workdayType: WorkdayType) {
    return this.httpClient.post(this.endpoint, workdayType);
  }

  update(workdayType: WorkdayType) {
    return this.httpClient.patch(this.endpoint + '/update', workdayType);
  }

  delete(id: number) {
    return this.httpClient.delete(this.endpoint + `/delete/${id}`);
  }
}

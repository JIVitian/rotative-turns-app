import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Workday } from './models';

@Injectable({
  providedIn: 'root',
})
export class WorkdayService {
  private readonly endpoint = environment.baseUrl + '/workday';

  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.endpoint + '/all');
  }

  getById(id: number) {
    return this.httpClient.get(this.endpoint + `/${id}`);
  }

  create(workday: Workday) {
    return this.httpClient.post(this.endpoint, workday);
  }

  update(workday: Workday) {
    return this.httpClient.patch(this.endpoint + '/update', workday);
  }

  delete(id: number) {
    return this.httpClient.delete(this.endpoint + `/delete/${id}`);
  }
}

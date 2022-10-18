import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Workday } from './models';
import { UpdateWorkdayDTO } from './models/update-workday-dto';

@Injectable({
  providedIn: 'root',
})
export class WorkdayService {
  private readonly endpoint = environment.baseUrl + '/workday';

  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Workday[]>(this.endpoint + '/all');
  }

  getById(id: number) {
    return this.httpClient.get<Workday>(this.endpoint + `/${id}`);
  }

  create(workday: Workday) {
    return this.httpClient.post<Workday>(this.endpoint, workday);
  }

  update(workday: UpdateWorkdayDTO) {
    return this.httpClient.patch<Workday>(this.endpoint + '/update', workday);
  }

  delete(id: number) {
    return this.httpClient.delete<boolean>(this.endpoint + `/delete/${id}`);
  }
}

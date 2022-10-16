import { Employee } from '../../employee';
import { WorkdayType } from '../../workday-type';

export type Workday = {
  id?: number;
  employee: Employee;
  type: WorkdayType;
  date: Date;
  timeFrom: Date;
  timeTo: Date;
};

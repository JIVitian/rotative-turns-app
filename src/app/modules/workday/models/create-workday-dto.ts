import { Employee } from '../../employee';
import { WorkdayType } from '../../workday-type';

export type CreateWorkdayDTO = {
  employee: Employee;
  type: WorkdayType;
  date: string;
  timeFrom: string;
  timeTo: string;
};

import { Employee } from './employee';

export type HoursPerWorkday = {
  workdayType: string;
  hours: number;
};

export type EmployeeGetResponse = {
  employee: Employee;
  employeeHoursForEachWorkdayType: Array<HoursPerWorkday>;
};

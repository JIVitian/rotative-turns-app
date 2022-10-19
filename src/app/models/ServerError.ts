export type ServerError = {
  timestamp: Date;
  status: number;
  error: string;
  trace: string;
  message: string;
  path: string;
};

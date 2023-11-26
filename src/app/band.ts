export interface Band {
  success: Band;
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  createdDate: Date; // Note: You can use Date or string depending on your preference and how the data is formatted.
  modifiedBy: string;
  modifiedDate: Date; // Same as createdDate, choose Date or string as per your data format.
}

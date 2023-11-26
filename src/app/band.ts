// export interface Band {
//   success: Band;
//   id: number;
//   name: string;
//   startDate: Date;
//   endDate: Date;
//   createdBy: string;
//   createdDate: Date; // Note: You can use Date or string depending on your preference and how the data is formatted.
//   modifiedBy: string;
//   modifiedDate: Date; // Same as createdDate, choose Date or string as per your data format.
// }

import { Timestamp } from 'rxjs';

// export interface Band {
//     id: number;
//     name: string;
//     startDate: Date;
//     endDate: Date;
//     createdBy: string;
//     createdDate: Date;
//     modifiedBy: string;
//     modifiedDate: Date;
// }

// export class Band {
//     id: number=0;
//     name: string="";
//     startDate!: Date;
//     endDate!:Date ;
//     createdBy: string="";
//     createdDate!: Date;
//     modifiedBy: string="";
//     modifiedDate!: Date;

//   }
export class Band {
  id: number = 0;
  name: string = '';
  startDate: Date = new Date(); // Initialized to the current date
  endDate: Date = new Date();
  createdBy: string = '';
  createdDate: Date = new Date();
  modifiedBy: string = '';
  modifiedDate: Date = new Date();
}

// Import necessary modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Band } from './band';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  private bandsUrl = 'http://localhost:9090/api/v1/bands'; // JSON file path type -http://localhost:9090/bands
  //private bandUrl = 'assets/band.json';

  //injecting httpclient module into constructor
  constructor(private http: HttpClient) {}

  //get returns observable object
  getBandsList(): Observable<Band[]> {
    return this.http.get<Band[]>(this.bandsUrl); //DONT USE BACKTICKS
  }

  // Add a new method to get a single record
  // getBandById(): Observable<Band> {
  //   return this.http.get<Band>(this.bandUrl);
  // }

  //POST
  createBand(band: Band): Observable<Object> {
    return this.http.post(this.bandsUrl, band);
  }

  //GET BY ID
  getBandById(id: number): Observable<Band> {
    return this.http.get<Band>(this.bandsUrl + '/' + id);
  }

  //UPDATE EMPLOYEE
  //call the below methid in comp.ts
  updateBand(id: number, band: Band): Observable<Object> {
    return this.http.put(this.bandsUrl + '/' + id, band);
  }

  //delete employee rest  api
  deleteBand(id: number): Observable<Object> {
    return this.http.delete(this.bandsUrl + '/' + id);
  }
}

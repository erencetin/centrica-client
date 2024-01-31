import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

private apiUrl = 'https://localhost:7235/api/District/with-salespersons-and-stores';

  constructor(private http: HttpClient) {}

  getDistricts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  baseUrl = 'http://localhost:3000/employees';

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(this.baseUrl + '/' + id, data);
  }

  employeeList(): Observable<any> {
    return this._http.get(this.baseUrl);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(this.baseUrl + '/' + id);
  }
}

import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/employees');
  }

  addEmployees(emp) {
    return this.http.post<Employee>(this.url + '/employees' , emp);
  }
  getbyid(id) {
    return this.http.get(this.url  + '/employees/' + id);
  }
  updateEmployees(emp) {
    return this.http.put<Employee>(this.url + '/employees/' + emp.id, emp);
  }
}

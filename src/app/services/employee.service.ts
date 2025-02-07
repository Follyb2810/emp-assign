import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateEmployee } from '../model/class/CreateEmploye';
import { IApiResponse } from '../model/interface/index.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url:string='https://projectapi.gerasim.in/api/EmployeeManagement'
  constructor(private http:HttpClient) { }
  
  createNewEmploye(body:CreateEmployee):Observable<CreateEmployee>{
    return this.http.post<CreateEmployee>(`${this.url}/createEmployee`,body)
  }
  getEmployees():Observable<CreateEmployee[]>{
    return this.http.get<Array<CreateEmployee>>(`${this.url}/getAllEmployees`)
  }
  deleteEmployeeById(id:number):Observable<CreateEmployee>{
    return this.http.delete<CreateEmployee>(`${this.url}/deleteEmployee/${id}`)
  }
  updateEmployee(body:CreateEmployee):Observable<CreateEmployee>{
    return this.http.put<CreateEmployee>(`${this.url}/updateEmployee/${body.employeeId}`,body)
  }
}

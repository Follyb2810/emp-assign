import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../model/interface/index.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
url:string='https://projectapi.gerasim.in/api/EmployeeManagement'
  constructor(private http:HttpClient) { }
  getParent():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(`${this.url}/getParentDepartment`)
  }
  getChildDepartmentByParentId(id:number):Observable<IApiResponse>{
    return this.http.get<IApiResponse>(`${this.url}/getChildDepartmentByParentId?dept=${id}`)
  }
  
  
}

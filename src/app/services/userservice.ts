import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createEmployee(data: any){
    return this.http.post('http://localhost:8080/employee-payroll/create/',data);
  }

  getEmployee(id: any){
    return this.http.get('http://localhost:8080/employee-payroll/getbyid?id=' + id);
  }

  getEmployeeList(){
    return this.http.get('http://localhost:8080/employee-payroll/get');
  }

  updateEmployee(data: any){
    return this.http.put('http://localhost:8080/employee-payroll/update/',data);
  }

  deleteEmployee(id: any){
    return this.http.delete('http://localhost:8080/employee-payroll/delete/' + id);
  }
}

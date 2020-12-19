import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userservice'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['profile', 'name', 'gender', 'department', 'salary', 'startDate', 'notes', 'id'];
  employees: any;
  constructor(private employeeService: UserService,
    private router: Router) {}
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employeeService.getEmployeeList().subscribe((response:any)=>{
      console.log("Response is ====> ",response)
       this.employees = response.data;
      console.log(this.employees)
    })
  }
  deleteEmployee(id: any) {
    console.log(id);
    this.employeeService.deleteEmployee(id)
      .subscribe((response:any) => {
        console.log("Response is ====> ",response)
        this.reloadData();
    })
  }
}
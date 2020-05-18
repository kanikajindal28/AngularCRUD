import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // tslint:disable-next-line:new-parens
  // private employee: Employee = new class implements Employee {
  //   id: number;
  //   fname: string;
  //   lname: string;
  // };
  private employee;

  constructor(private empService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => {
      this.employee = data;
    });

  }

  viewdetails(id: any) {
    this.router.navigate(['/updateEmployee', id]);
  }
}

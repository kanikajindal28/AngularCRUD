import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {ActivatedRoute, Router} from '@angular/router';

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
  private id;
  private empl;

  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data => {
      this.employee = data;
    });
  }

  viewdetails(id: any) {
    this.router.navigate(['/updateEmployee', id]);
  }

  deleteEmployee(id) {
    this.empService.getbyid(id).subscribe(data => {
      this.empl = data;
      this.empService.deleteEmployees(this.empl).subscribe(data2 => {
          this.empService.getEmployees().subscribe(data3 => {
            this.employee = data3;
          });
      });
    });
  }

  empdetails(id: any) {
    this.router.navigate(['/empDetails', id]);
  }
}

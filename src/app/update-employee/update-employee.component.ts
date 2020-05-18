import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  private id;
  private emp;
  constructor(private empService: EmployeeService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.empService.getbyid(this.id).subscribe(response => {
        this.emp = response;
        console.log(this.emp);
      });
    });
  }

  update() {
    this.empService.updateEmployees(this.emp).subscribe(data => {
      console.log(data);
      alert('Employee is Updated');
      this.router.navigate(['employees']);
    });
  }
}

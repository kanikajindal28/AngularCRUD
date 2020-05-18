import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  private empForm: FormGroup;
  constructor(private fb: FormBuilder, private empService: EmployeeService, private router: Router) { }


  ngOnInit() {
    this.empForm = this.fb.group({
      id: [''],
      fname: [''],
      lname: [''],
    });
  }

  addEmp() {
    this.empService.addEmployees(this.empForm.value).subscribe(data => {
    // this.empService.getEmployees().subscribe(data2 => {
      console.log('Employee Added');
      alert('New Employee has been added');
      this.router.navigate(['employees']);
    // });
  });
  }
}

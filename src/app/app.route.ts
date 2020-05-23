import {Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {DetailsComponent} from './details/details.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: EmployeeComponent,
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'updateEmployee/:id',
    component: UpdateEmployeeComponent
  },
  {
    path: 'empDetails/:id',
    component: DetailsComponent
  }

];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeForTDFComponent } from './Component/employee-for-tdf/employee-for-tdf.component';
import { EmployeeForRFComponent } from './Component/employee-for-rf/employee-for-rf.component';
import { ShowEmpComponent } from './Component/show-emp/show-emp.component';
import { ShowEmpReactFormComponent } from './Component/show-emp-react-form/show-emp-react-form.component';

const routes: Routes = [
  {path:"employee_tdf",component:EmployeeForTDFComponent},
  {path:"employee_rf",component:EmployeeForRFComponent},
  {path:"show_employee",component:ShowEmpComponent},
  {path:"show_employee_react",component:ShowEmpReactFormComponent},
  {path:"edit_employee_tdf/:id",component:EmployeeForTDFComponent},
  {path:"edit_employee_rf/:id",component:EmployeeForRFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

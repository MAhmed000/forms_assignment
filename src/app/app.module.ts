import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeForTDFComponent } from './Component/employee-for-tdf/employee-for-tdf.component';
import { ExpenseFieldsComponent } from './Component/employee-for-tdf/expense-fields/expense-fields.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { EmployeeForRFComponent } from './Component/employee-for-rf/employee-for-rf.component';
import { ExpenseFieldsRfComponent } from './Component/employee-for-rf/expense-fields-rf/expense-fields-rf.component';
import { ShowEmpComponent } from './Component/show-emp/show-emp.component';
import { ModelBoxComponent } from './Component/model-box/model-box.component';
import { ShowEmpReactFormComponent } from './Component/show-emp-react-form/show-emp-react-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeForTDFComponent,
    ExpenseFieldsComponent,
    EmployeeForRFComponent,
    ExpenseFieldsRfComponent,
    ShowEmpComponent,
    ModelBoxComponent,
    ShowEmpReactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-for-rf',
  templateUrl: './employee-for-rf.component.html',
  styleUrls: ['./employee-for-rf.component.css'],
})
export class EmployeeForRFComponent implements OnInit {
  // Employee Id that comes from localstorage
  emp_id =
    this.service.getEmployeeFromLocalStorage() == null
      ? 1
      : this.service.getEmployeeFromLocalStorage().length + 1;

    constructor(
      private service: EmployeeService,
      private formBuilder: FormBuilder,private ActivatedRoute:ActivatedRoute,private router:Router) {

    }

  employeeForm: FormGroup;

  addEditEmpBtn:string="Add Employee";
  total_Cost:number=0;
  id!:any;
  singleEmployee!:Employee;


  ngOnInit(): void {
    this.employee.employee_id = this.emp_id;
    this.id=this.ActivatedRoute.snapshot.params["id"];
    this.getSingleEmployee();
    this.initializeForm();

    console.log(this.id)
    if(this.id){
      this.addEditEmpBtn="Edit Employee";
    }
  }


  a:any;
  initializeForm(){
    // debugger
    if(this.id){

      this.employeeForm = this.formBuilder.group({
        employee_id: [this.singleEmployee.employee_id],
        employee_name: [
          this.singleEmployee.employee_name,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(14),
          ],
        ],
        contact: [
          this.singleEmployee.contact,
          [Validators.required, Validators.pattern(/^03\d{2}-\d{7}$/)],
        ],
        address: [this.singleEmployee.address],
        gender_id: this.singleEmployee.gender_id,
        expense: this.formBuilder.array(this.singleEmployee.expense),
      });
    }
    else{
      this.employeeForm = this.formBuilder.group({
        employee_id: [this.emp_id],
        employee_name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(14),
          ],
        ],
        contact: [
          '',
          [Validators.required, Validators.pattern(/^03\d{2}-\d{7}$/)],
        ],
        address: [''],
        gender_id: 0,
        expense: this.formBuilder.array([]),
      });
    }
  }


  updateTotalCost(){
    const emp=this.service.getEmployeeFromLocalStorage() as Employee[];
    emp.forEach(emp=>{
      this.total_Cost=0;
      emp.expense.forEach(exp=>{
        return this.total_Cost=this.total_Cost+Number(exp.cost);
      })
    })
  }

  // Get Single Employee
  getSingleEmployee(){
    let emp=this.service.getEmployeeFromLocalStorage() as Employee[];
      const singleemplist=emp.filter(x=>{
        return x.employee_id==this.id;
      })
      this.singleEmployee=singleemplist[0];
  }

  // Employee Model
  employee: Employee = {
    employee_id: 0,
    employee_name: '',
    contact: '',
    address: '',
    gender_id: 0,
    expense: [],
  };

  gender = [
    { id: 1, gender: 'Male' },
    { id: 2, gender: 'Female' },
    { id: 3, gender: 'Others' },
  ];

  editEmployee(){
    const emp=this.service.getEmployeeFromLocalStorage() as Employee[];
    let employeeList=emp.filter(x=>{
      return x.employee_id!=this.id;
    })
    employeeList.push(this.employee);
    localStorage.setItem("data",JSON.stringify(employeeList));
  }


  Submit() {
    if(this.addEditEmpBtn=="Add Employee"){
      if(this.employeeForm.valid){
        this.service.setEmployeeToLocalStorage(this.employeeForm.value);
        console.log(this.service.getEmployeeFromLocalStorage());
        location.reload();
      }
    }
    else{
      this.editEmployee();
      this.router.navigateByUrl("/show_employee");
    }
  }
}

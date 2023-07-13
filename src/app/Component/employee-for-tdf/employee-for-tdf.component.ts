import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-for-tdf',
  templateUrl: './employee-for-tdf.component.html',
  styleUrls: ['./employee-for-tdf.component.css']
})
export class EmployeeForTDFComponent implements OnInit{
// Employee Id that comes from localstorage
  emp_id=this.service.getEmployeeFromLocalStorage()==null?1:(this.service.getEmployeeFromLocalStorage().length+1)*2;
  editOrAdd:string='Edit Employee';

  constructor(private service:EmployeeService,private activatedRoute:ActivatedRoute,private router:Router){}

  // Employee Model
  employee:Employee={
    employee_id: 0,
    employee_name: '',
    contact: '',
    address: '',
    gender_id: 0,
    expense: []
  };


  id:number;

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    if(id){
      this.id=id;
      this.getSingleEmployee(id);
      this.updateTotalCost();
    }else{
      this.editOrAdd="Add Employee";
      this.employee.employee_id=this.emp_id;
    }
  }


  getSingleEmployee(id){
    this.employee = this.service.getEmployeeFromLocalStorage().filter(x=>x.employee_id===Number(id))[0];
  }

  total_Cost:number=0;

  updateTotalCost(){
    const emp=this.service.getEmployeeFromLocalStorage() as Employee[];
    emp.forEach(emp=>{
      this.total_Cost=0;
      emp.expense.forEach(exp=>{
        return this.total_Cost=this.total_Cost+Number(exp.cost);
      })
    })
  }

  gender=[
    {id:1,gender:"Male"},
    {id:2,gender:"Female"},
    {id:3,gender:"Others"}
  ]

  editEmployee(){
    const emp=this.service.getEmployeeFromLocalStorage() as Employee[];
    let employeeList=emp.filter(x=>{
      return x.employee_id!=this.id;
    })
    employeeList.push(this.employee);
    localStorage.setItem("data",JSON.stringify(employeeList));
  }

  Submit(val:NgForm){
    if(this.editOrAdd=='Edit Employee'){
      this.editEmployee();
      this.router.navigateByUrl("/show_employee");
    }else{
      this.service.setEmployeeToLocalStorage(this.employee);
      location.reload();
    }
  }

}

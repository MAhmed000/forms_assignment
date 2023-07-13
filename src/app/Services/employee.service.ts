import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  setEmployeeToLocalStorage(employee:any){
    const getValueFromLocalStorage=this.getEmployeeFromLocalStorage();
    getValueFromLocalStorage==null?localStorage.setItem("data",JSON.stringify([employee])):localStorage.setItem("data",JSON.stringify([...getValueFromLocalStorage,employee]));
  }

  getEmployeeFromLocalStorage(){
    return JSON.parse(localStorage.getItem("data"));
  }
}

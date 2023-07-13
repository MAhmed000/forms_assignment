import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-expense-fields-rf',
  templateUrl: './expense-fields-rf.component.html',
  styleUrls: ['./expense-fields-rf.component.css'],
})
export class ExpenseFieldsRfComponent implements OnInit {
  @Input() employeeForm: FormGroup;
  @Input() id:any;

  constructor(private services:EmployeeService){}
  // expense id generate
  getEmplastlength=localStorage.getItem('data')==null?0:this.services.getEmployeeFromLocalStorage().length-1;
  getExpenseLastLength=localStorage.getItem('data')==null?0:this.services.getEmployeeFromLocalStorage()[this.getEmplastlength].expense.length-1
  newExpenseId=localStorage.getItem('data')==null?0:
  this.services.getEmployeeFromLocalStorage()[this.getEmplastlength].expense[this.getExpenseLastLength].employee_id;

  item!: FormArray;
  totalCost: number = 0;

  expenseType = [
    { id: 1, Type: 'Food' },
    { id: 2, Type: 'Travel' },
    { id: 3, Type: 'Others' },
  ];

  ngOnInit(): void {
    if(this.id){

    }else{
      this.AddNewExpense();
    }
  }

  AddNewExpense() {
    this.item = this.employeeForm.get('expense') as FormArray;
    this.item.push(this.GetNewRow());

  }

  // Generate new row
  newval:number=0;
  GetNewRow() {
    return new FormGroup({
      Expense_id: new FormControl(this.newval+=this.newExpenseId+2, Validators.required),
      Expense_name: new FormControl('', Validators.required),
      Type: new FormControl('', Validators.required),
      Expense_Date: new FormControl('', Validators.required),
      cost: new FormControl(null, [
        Validators.required,
        Validators.max(1000.21),
        Validators.pattern(/^\d+(\.\d{1,2})?$/)
      ]),
      employee_id: new FormControl(this.employeeForm.get('employee_id').value),
    });
  }

  //get expense array
  get expenseList() {
    return this.employeeForm.get('expense') as FormArray;
  }

  getCostValue(e){
    if(e==null){

    }else{
      this.totalCost=0;
      e.forEach(element => {
        this.totalCost+=element.value.cost;
      });
    }
    return this.totalCost;
  }
  newList:any;
  DeleteItem(item){
    if(item.value.cost==null){
      this.expenseList.controls=this.expenseList.controls.filter(x=>
      {
          return x.value.Expense_id!=item.value.Expense_id
      });
    }else{
      this.totalCost=this.totalCost-item.value.cost;
      this.expenseList.controls=this.expenseList.controls.filter(x=>
        {
          return x.value.Expense_id!=item.value.Expense_id
        });
    }

      console.log(this.expenseList.controls)
  }
}

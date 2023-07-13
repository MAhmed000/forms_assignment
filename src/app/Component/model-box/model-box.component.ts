import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Expense } from 'src/app/Models/Expense.model';

@Component({
  selector: 'app-model-box',
  templateUrl: './model-box.component.html',
  styleUrls: ['./model-box.component.css']
})
export class ModelBoxComponent implements OnInit{

  @Input() isTable:boolean;
  @Input() employeeExpense!:Expense[];
  @Output() closeEmiter:EventEmitter<boolean>=new EventEmitter<boolean>();

  Close(){
    this.closeEmiter.emit(!this.isTable);
  }

  ngOnInit(): void {
  }

}

import { Expense } from "./Expense.model";

export interface Employee{
    employee_id:number;
    employee_name:string;
    contact:string;
    address:string;
    gender_id:number;
    expense:Expense[];
}
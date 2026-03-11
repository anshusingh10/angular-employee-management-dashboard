import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:any[] = [
    {id:1,name:"John Doe",email:"john@gmail.com",department:"Developer"},
    {id:2,name:"Sarah Smith",email:"sarah@gmail.com",department:"Designer"},
    {id:3,name:"Bob Johnson",email:"bob@gmail.com",department:"Tester"},
    {id:4,name:"Emily Brown",email:"emily@gmail.com",department:"Developer"},
    {id:5,name:"David Lee",email:"david@gmail.com",department:"Designer"},
    {id:6,name:"Jessica Davis",email:"jessica@gmail.com",department:"Tester"},
    {id:7,name:"Michael Wilson",email:"michael@gmail.com",department:"Developer"},
    {id:8,name:"Olivia Taylor",email:"olivia@gmail.com",department:"Designer"},
    {id:9,name:"William Clark",email:"william@gmail.com",department:"Tester"},
    {id:10,name:"Sophia Anderson",email:"sophia@gmail.com",department:"Developer"}
  ];

  constructor(){

    const data = localStorage.getItem("employees");

    if(data){
      this.employees = JSON.parse(data);
    }

  }

  saveToLocalStorage(){
    localStorage.setItem("employees", JSON.stringify(this.employees));
  }

  getEmployees(){
    return this.employees;
  }

  addEmployee(emp:any){
    this.employees.push(emp);
    this.saveToLocalStorage();
  }

  deleteEmployee(id:number){
    this.employees = this.employees.filter(e => e.id !== id);
    this.saveToLocalStorage();
  }

  updateEmployee(updated:any){

    const index = this.employees.findIndex(e => e.id === updated.id);

    if(index !== -1){
      this.employees[index] = updated;
    }

    this.saveToLocalStorage();
  }

}
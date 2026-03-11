import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent implements OnInit {

  employees:any[] = [];
  filteredEmployees:any[] = [];
  searchText = "";

  constructor(private empService:EmployeeService){}

  ngOnInit(){
    this.loadEmployees();
  }

  loadEmployees(){
    this.employees = this.empService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  deleteEmployee(id:number){
    this.empService.deleteEmployee(id);
    this.loadEmployees();
  }

  searchEmployee(){

    const text = this.searchText.toLowerCase();

    this.filteredEmployees = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(text) ||
      emp.email.toLowerCase().includes(text) ||
      emp.department.toLowerCase().includes(text)
    );

  }

}
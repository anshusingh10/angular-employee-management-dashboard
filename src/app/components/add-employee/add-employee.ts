import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployeeComponent {

  name = "";
  email = "";
  department = "";

  constructor(
    private empService:EmployeeService,
    private router:Router
  ){}

  addEmployee(){

    if(!this.name || !this.email || !this.department){
      alert("Please fill all fields");
      return;
    }

    const employee = {
      id: Date.now(),
      name: this.name,
      email: this.email,
      department: this.department
    };

    this.empService.addEmployee(employee);

    alert("Employee Added Successfully!");

    // clear fields
    this.name = "";
    this.email = "";
    this.department = "";

    // go back to list
    this.router.navigate(['/']);

  }

}
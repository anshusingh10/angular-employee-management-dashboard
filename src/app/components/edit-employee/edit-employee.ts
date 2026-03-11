import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports:[FormsModule],
  templateUrl:'./edit-employee.html'
})
export class EditEmployeeComponent{

  id:any;
  name="";
  email="";
  department="";

  constructor(
    private route:ActivatedRoute,
    private empService:EmployeeService,
    private router:Router
  ){

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const emp = this.empService.getEmployees().find(e => e.id === this.id);

    if(emp){
      this.name = emp.name;
      this.email = emp.email;
      this.department = emp.department;
    }

  }

  updateEmployee(){

    const updatedEmployee = {
      id:this.id,
      name:this.name,
      email:this.email,
      department:this.department
    };

    this.empService.updateEmployee(updatedEmployee);

    alert("Employee Updated!");

    this.router.navigate(['/']);

  }

}
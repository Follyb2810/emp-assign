import { Component, inject, OnInit, signal } from '@angular/core';
import { CreateEmployee, IChildDept, IParentDept } from '../../model/class/CreateEmploye';
import { FormsModule, NgForm } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { IApiResponse } from '../../model/interface/index.types';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employee: CreateEmployee = new CreateEmployee();
  parentList: IParentDept[] = [];
  childList:IChildDept[]=[]
  employeeList:CreateEmployee[]=[]
  deptId:number=0;
  isSideBarOpen = signal<boolean>(false)
  // masterService = inject(MasterService);
  constructor(private masterService: MasterService,private empService:EmployeeService) {}

  ngOnInit(): void {
    this.getParentDeptList();
    this.getEmployes()
    console.log(this.parentList);
  }
  AddEmp(){
    this.isSideBarOpen.set(false)
  }
  handleSubmit(form: NgForm) {
    console.log(this.employee);
    debugger;
    if (form.valid) {
      this.empService.createNewEmploye(this.employee).subscribe((res: CreateEmployee) => {
      alert('employee created succesfful')
      },error=>{
        console.log('error')
        alert('error')
      });
    }
  }
  handleUpdate(form: NgForm) {
    console.log(this.employee);
    debugger;
    if (form.valid) {
      this.empService.updateEmployee(this.employee).subscribe((res: CreateEmployee) => {
      alert('employee update succesfful')
      this.getEmployes();
      },error=>{
        console.log('error')
        alert('error')
      });
    }
  }
  
  getParentDeptList() {
    this.masterService.getParent().subscribe((res: IApiResponse) => {
      if (Array.isArray(res.data)) {
        this.parentList = res.data;
        console.log('Updated parentList:', this.parentList); 
      } else {
        console.error('Invalid response format:', res);
      }
    });
  }
  onDeptChange(){
    console.log(this.deptId)
    this.masterService.getChildDepartmentByParentId(this.deptId).subscribe((res:IApiResponse)=>{
      this.childList = res.data
      console.log(this.childList)
    })
  }
  
  getEmployes(){
    this.empService.getEmployees().subscribe((res:CreateEmployee[])=>{
      this.employeeList = res;
    }  
    ,error=>{
      alert('error')
    })
  }
  onDelete(id:number){
    const result = confirm('Are you sute')
    if(result){
      
      this.empService.deleteEmployeeById(id).subscribe((res:CreateEmployee)=>{
       alert('employee deleted successfull');
       this.getEmployes();
      }  
      ,error=>{
        alert('error')
      })
    }
  }
  onEdit(obj:CreateEmployee){
    this.employee = obj;
  }
  
  
}

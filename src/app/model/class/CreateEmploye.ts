
export class CreateEmployee{
    employeeId: number;
  employeeName: string;
  contactNo: string;
  emailId: string;
  deptId: number;
  password: string;
  gender: string;
  role: string;
  createdDate: Date;
  constructor(){
    this.deptId=0;
    this.employeeId=0;
    this.employeeName='';
    this.contactNo='';
    this.emailId='';
    this.password='';
    this.gender='';
    this.role='Employee';
    this.createdDate=new Date();
    
  }
}

export interface IParentDept {
    departmentId:number
    departmentName:string,
    departmentLogo:string
}
export interface IChildDept {
    parentDeptId:number
    childDeptId:number
    departmentName:string
}
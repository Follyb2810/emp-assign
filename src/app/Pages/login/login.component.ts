import { Component, inject } from '@angular/core';
import { LoginForm } from '../../model/class';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:LoginForm=new LoginForm()
  // url:string='https://projectapi.gerasim.in/api/EmployeeManagement/login'
  url:string='https://projectapi.gerasim.in/api/EmployeeManagement'
  
  // constructor(){}
  http = inject(HttpClient)
  router = inject(Router)
  
  handleSubmit(form:NgForm){
    // debugger;
    if(form.valid){
    this.http.post(`${this.url}/login`,this.loginObj).subscribe(
      (res:any)=>{
        console.log(res)
        if(res.result){
          localStorage.setItem("auth",JSON.stringify(res.data))
         this.router.navigateByUrl('dashboard') 
        }else{
          alert(res.message)
        }
      }
    )
    }
  }
}

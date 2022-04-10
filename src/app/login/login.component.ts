import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private toast: NgToastService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signUpUsers")
    .subscribe(res => {
      // const user = res.find((a:any)=>{
      //   return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      // });
      if(res.email === this.loginForm.value.email && res.password === this.loginForm.value.password){
        this.toast.success({detail:"SUCCESS",summary:'Login Successfull! Welcome to Doceey',duration:5000});
        this.loginForm.reset();
        this.router.navigate(['/navbar'])
      } else{
        // alert("User not found");
        this.toast.error({detail:"ERROR",summary:'User nor found',sticky:true});
      }
    },err => {
      alert("Something went wrong");
    })
  }

}
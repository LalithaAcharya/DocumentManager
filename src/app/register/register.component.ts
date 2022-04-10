import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signUpForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient,private toast: NgToastService, private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signUpUsers",this.signUpForm.value)
    .subscribe(res => {
      this.toast.success({detail:"SUCCESS",summary:'You have registered to Doceey',duration:5000});
      this.signUpForm.reset();
      this.router.navigate(['/login']);
    },err => {
      alert("Something went wrong..");
    })
  }

}
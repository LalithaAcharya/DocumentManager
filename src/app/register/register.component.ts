import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signUpForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

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
      this.signUpForm.reset();
      this.router.navigate(['/login']);
    },err => {
      alert("Something went wrong..");
    })
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Document } from '../shared/model/document';
import { ApiService } from '../shared/api.service';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  // public name:string = '';
  // public desc:string = '';
  // public doc:string = '';
  // public type:string = '';
  // types = ["pdf","excel","word"];
  
  // public dc = {} as Document

  // constructor(private d:DocumentService) { }

  // ngOnInit(): void {
  // }
  // getForm(name:string,desc:string,doc:string,type:string){
  //   console.log(name);
  //   console.log(desc);
  //   console.log(doc);
  //   console.log(type);
  
  //   this.dc.docName=name;
  //   this.dc.docDesc=desc;
  //   this.dc.Docfile=doc;
  //   this.dc.docType=type
  //   this.d.document.push(this.dc);
  
  //   console.log(this.d.document);

  formValue !: FormGroup;
  documentobj : Document = new Document();
  // WorkFlowServiceService: any;
  constructor(private formbuilder: FormBuilder,
    private api :ApiService, private router:Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name : [''],
      docname : [''],
      doctype : [''],
      docfile : ['']
    })
  }
postDocument(){
  this.documentobj.Name = this.formValue.value.name;
  this.documentobj.DocName= this.formValue.value.docname;
  this.documentobj.DocType = this.formValue.value.doctype;
  this.documentobj.DocFile = this.formValue.value.docfile;

 this.api.postdocument(this.documentobj)
 .subscribe(res=>{
   console.log(res);
  //  alert("document added Successfully")
  Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
   this.formValue.reset();
   this.router.navigate(['/dashboard']);
 },
   err=>{
     alert("Something Went wrong, please try again")
 })
}
resetDocument(){
  this.formValue.reset();
}
  
  
}

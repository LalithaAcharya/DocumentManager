import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  // constructor(private dm:DocumentService) { }
  // docPrint:Document[]=this.dm.document;
  // ngOnInit(): void {
  // }
  formValue !: FormGroup;
  documentobj : Document = new Document();
  documentData!:any;
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }
  ngOnInit(): void {
    
    this.getAllDocument();
  }
 getAllDocument(){
   this.api.getdocument()
     .subscribe(res=>{
        this.documentData=res;
     })
   }

 }
 




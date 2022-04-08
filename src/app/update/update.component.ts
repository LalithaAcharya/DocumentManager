import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Document } from '../shared/model/document';
import { DetailsDocument } from '../shared/model/documentDetail';
import { FindDocument } from '../shared/model/findDocument';
import { UpdateService } from '../shared/update.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  constructor(private formbuilder: FormBuilder, public route:ActivatedRoute, public router:Router, public ups:UpdateService) { }

  val:any;
  formValue !: FormGroup;
  documents:DetailsDocument[] =[];
  document!: FindDocument;

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      Name:[''],
      DocName:[''],
      DocType:[''],
      DocFile:['']
    })
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    })
    
    this.ups.getUpdateDocumentDetails(this.val).subscribe(data=> {
      this.document = data;
    })
    
  }

  update(){
    this.ups.updateDocumentDetails(this.document).subscribe(data=>{
    });
    this.getDocumentDetails();
    alert("Document Updated Successfully")
    this.router.navigate(['/dashboard']);
  }

  getDocumentDetails(){
    this.ups.getDocumentDetails().subscribe((res) => {
      this.documents = res;
    });
  }

  
  

}

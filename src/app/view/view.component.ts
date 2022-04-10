import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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

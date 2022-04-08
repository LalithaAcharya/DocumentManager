import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formValue !: FormGroup;
  documentobj : Document = new Document();
  documentData!:any;
  constructor(private formbuilder: FormBuilder, private api : ApiService, private router:Router, private route:ActivatedRoute) { }
  ngOnInit(): void {
    
    this.getAllDocument();
  }
 getAllDocument(){
   this.api.getdocument()
     .subscribe(res=>{
        this.documentData=res;
     })
   }

   update(id: number) {
    // this.router.navigate(['/update',id])
    // this.router.navigate(['/update']);
    this.router.navigate(['/update',id])
  }

}

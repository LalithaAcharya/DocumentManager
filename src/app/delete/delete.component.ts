import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
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

   deleteDocument(row : any){
    this.api.deleteWorkflow(row.id)
    .subscribe(res=>{
      Swal.fire('Thank you...', 'Document deleted succesfully!', 'success');
      // alert("Document deleted Successfully")
      this.getAllDocument();
    })
  }
  
}

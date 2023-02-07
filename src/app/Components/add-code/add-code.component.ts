import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddCodeService } from 'src/app/Services/add-code.service';

@Component({
  selector: 'app-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.css']
})
export class AddCodeComponent implements OnInit {

  values=[]
  submitted=false;
  ngOnInit(): void {
  }

  CodeForm: FormGroup;  
     
  constructor(private fb:FormBuilder,private addCodeService:AddCodeService,private router : Router) {  
     
    this.CodeForm = this.fb.group({  
      Technology: ['',Validators.compose([Validators.required])], 
      CodeFor:['',Validators.compose([Validators.required])],
      Codes: this.fb.array([]) ,  
    });  
  }  
    
  quantities() : FormArray {  
    return this.CodeForm.get("Codes") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      PageTitle: ['',Validators.compose([Validators.required])],  
      code: ['',Validators.compose([Validators.required])], 
    })  
  }  
  get f():{ [key: string]: AbstractControl } {  
    return this.CodeForm.controls; } 


  AddValues() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() {  
    
   if(this.CodeForm.invalid){
    alert('Please Fill All Fields')
   }
   else{
    this.addCodeService.AddCodeTODB(this.CodeForm.value);  
    this.addCodeService.AddTechnology(this.CodeForm.controls['Technology'].value);
    alert('Saved Successfull');
    this.router.navigate(['/']);
   }
    
  }  

}

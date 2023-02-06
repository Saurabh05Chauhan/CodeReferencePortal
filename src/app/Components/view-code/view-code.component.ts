import { Component, OnInit } from '@angular/core';
import { AddCode } from 'src/app/Models/AddCode';
import { Technology } from 'src/app/Models/Technology';
import { AddCodeService } from 'src/app/Services/add-code.service';

@Component({
  selector: 'app-view-code',
  templateUrl: './view-code.component.html',
  styleUrls: ['./view-code.component.css'],
})
export class ViewCodeComponent implements OnInit {
  static codeData:AddCode[] = []
  constructor(private codeservice: AddCodeService) {}

  Technology: any;
  Code: AddCode | undefined;
  Codes:any[]=[];
  CodeForList: any[] = [];
  selectedValue: any='';
  ngOnInit(): void {
    this.GetTechnology();
  }

  GetTechnology() {
    debugger;
    this.codeservice
      .GetTechnology()
      .valueChanges()
      .subscribe(
        (res) => {
          debugger;
          this.Technology = res;
          (this.Technology);
        },
        (err) => {
          (err);
        },
        () => {
          (this.Technology);
        }
      );
  }

  GetCodeBody(CodeFor:string){
    debugger
(CodeFor)
this.Codes=[];
ViewCodeComponent.codeData.forEach((item)=>{
if(item.CodeFor==CodeFor){
  this.Code=(item);
  this.Codes.push(item.Codes);
  (this.Codes)
}
})
  }

  DropSelectedIndexChanged(e: any) {
    debugger;
     this.selectedValue = e.target.value;
    this.codeservice
      .GetCodeForValues(this.selectedValue)
      .get()
      .then((res) => {
        res.forEach((data) => {
          ViewCodeComponent.codeData.push(data.data());   
        });
        ViewCodeComponent.codeData.forEach(element => {
          this.CodeForList.push(element)
        }); 

        (this.CodeForList)
      });
  }
}

import { Injectable } from '@angular/core';
import { AddCode } from '../Models/AddCode';
import { Technology} from '../Models/Technology'
import {AngularFirestore,AngularFirestoreCollection,Query} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class AddCodeService {

  constructor(private afs:AngularFirestore) { }
  technology: AngularFirestoreCollection<Technology> | undefined;

  AddCodeTODB(form:AddCode){
    return this.afs.collection('/CodeReference').add(form);
  }

  AddTechnology(TechName:Technology){
    this.afs.collection('Technology',ref=>ref.where('Technology','==',TechName)).get().subscribe(res=>{
      
      if(res.docs.length<=0){
        
        this.afs.collection('/Technology').add({Technology:TechName})
      }
    })
  }

   GetTechnology():AngularFirestoreCollection<Technology>{
   return this.afs.collection('/Technology');
  }

  GetCodeForValues(value:string):Query<any>{
    return this.afs.collection('CodeReference').ref.where('Technology','==',value);
  }
}

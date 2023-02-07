import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCodeComponent } from './Components/add-code/add-code.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NotesComponent } from './Components/notes/notes.component';
import { ViewCodeComponent } from './Components/view-code/view-code.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {
    path:'add',component:AddCodeComponent
  },
  {
    path:'view',component:ViewCodeComponent
  },
  {
    path:'note',component:NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileInfoComponent} from "./profile-info/profile-info.component";
import {ProfileCardsComponent} from "./profile-cards/profile-cards.component";

const routes: Routes = [
  {
    path:'',
    component:ProfileCardsComponent
  }
  ,
  {
    path:'profile-card',
    component:ProfileCardsComponent
  },
  {
    path:'profile-info',
    component:ProfileInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

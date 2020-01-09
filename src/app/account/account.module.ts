import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import {Routes,RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import{SharedModule} from './../shared/shared.module'


const accountRoutes:Routes=[
  {path:'account',
   component:AccountComponent,
   children:[
     {path:'login',component:LoginComponent}
   ]
}
] 

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    RouterModule.forChild(accountRoutes)
  ],
  exports:[LoginComponent,AccountComponent]
})
export class AccountModule { }

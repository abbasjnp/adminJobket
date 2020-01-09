import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import{MatSnackBarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';


@NgModule({
  declarations: [HeaderComponent,SidebarComponent, EllipsisPipe],
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule
  ],
  exports: [SidebarComponent, HeaderComponent,EllipsisPipe],
})
export class SharedModule { }

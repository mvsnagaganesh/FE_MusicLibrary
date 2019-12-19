import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlbumsComponent}from './albums.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule,MatInputModule } from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,MatCardModule,Ng2SearchPipeModule,ReactiveFormsModule,MatInputModule,
    RouterModule.forChild([{path:'albums',component:AlbumsComponent}])
  ],
  declarations: [AlbumsComponent]
})
export class AlbumsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,MatCardModule,
    RouterModule.forChild([{path:'title',component:TitleComponent}])
  ],
  declarations: [TitleComponent]
})
export class TitleModule { }   
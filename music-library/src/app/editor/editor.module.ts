import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditorComponent} from './editor.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule,MatButtonModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,
    CommonModule,RouterModule.forChild([{path:'editor',component:EditorComponent}])
  ],
  declarations: [EditorComponent]
})
export class EditorModule { }
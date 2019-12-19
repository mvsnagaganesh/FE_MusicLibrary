import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from './welcome.component';
import {MatButtonModule} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,MatButtonModule,RouterModule.forChild([{path:'welcome',component:WelcomeComponent}])
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
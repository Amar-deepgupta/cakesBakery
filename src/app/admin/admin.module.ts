import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditfromComponent } from '../editfrom/editfrom.component';
import { AddcakeComponent } from '../addcake/addcake.component';
import { CakeformComponent } from 'src/app/cakeform/cakeform.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'editform/:id', component: EditfromComponent },
  {
    path: 'addcake', component: CakeformComponent
  }

  
]

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule]
})
export class AdminModule { }

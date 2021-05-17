import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditfromComponent } from '../editfrom/editfrom.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'editform/:id', component: EditfromComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModule { }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cakeform',
  templateUrl: './cakeform.component.html',
  styleUrls: ['./cakeform.component.css']
})
export class CakeformComponent implements OnInit {
  addvalue: any = {}
  ingredients: any = {};
  api:any = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client:HttpClient) {
     }

  ngOnInit(): void {
  }
  upload(event: any) {
    if (event.target.files.length === 0) {
      console.log("No file selected!");
      return
   }
  let file: File = event.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
    console.log(formData);
  
  // this.files.inProgress = true;
  
  this.client.post(this.api +'upload',formData).subscribe((res: any) => {
    console.log("response from upload api", res)
    this.addvalue.image = res.imageUrl;
    console.log(this.addvalue.image);
  }, (error) => {
    console.log("error from upload api",error)
      }
    );
  }
  ingdDel(i: any) {
    console.log(i);
    console.log(this.ingredients);
    this.addvalue.ingredients.splice(i, 1);
    this.ingredients = { ...this.addvalue.ingredients };
  }
  ingAdd() {
    this.addvalue.ingredients = Object.values(this.ingredients);
    this.addvalue.ingredients.push('');
    this.ingredients = { ...this.addvalue.ingredients };
  }
  save() {
    console.log("the enter data is:", this.addvalue);
    this.client.post(this.api +'addcake',this.addvalue).subscribe((res: any) => {
      console.log("response from cake add api", res)
      
    }, (error) => {
      console.log("error from upload api",error)
        }
      );
    }
  
}

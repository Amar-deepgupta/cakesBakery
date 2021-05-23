import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // variable declaration
  choosecake: any = {};
  api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client:HttpClient,private router:Router) {
    //showing data while the compontent is loading
    this.showing()
   }

  ngOnInit(): void {
  }
  //function hit Api and collect the data 
  showing() {
    this.client.get(this.api+'allcakes').subscribe((res: any) => {
      console.log("response from cakescart", res)
      this.choosecake = [...res.data];
       console.log(this.choosecake);
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  // navigate to edit form component
  editform(i:any) {
    this.router.navigate(['/admin/editform', i]);
  }
}

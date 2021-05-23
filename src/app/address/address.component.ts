import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CakeService } from 'src/app/cake.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  
  // variables declaration/define

  userdetails: any = {}
  choosecake: any;
  totalprice: any = 0;
  
// API hit by post type
  api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client:HttpClient,private route:Router,public cs:CakeService) {
    this.client.post(this.api + 'cakecart', {}).subscribe((res: any) => {
      console.log("response from cakescart", res)
      //get data from Api 
      this.userdetails.cakes = [...res.data];
      this.userdetails.price=(this.userdetails.cakes.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
      
      
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  
  ngOnInit(): void {
  }
  // functionality  on click order button
  placeorder() {
    this.cs.confirmDetails = { ...this.userdetails };
    this.cs.confirmFlag = "true";
   this.route.navigate(['checkout/confirm']);
  
  }
}


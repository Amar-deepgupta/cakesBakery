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
  userdetails: any = {}
  choosecake: any;
  totalprice: any = 0;
  
  api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client:HttpClient,private route:Router,public cs:CakeService) {
    this.client.post(this.api + 'cakecart', {}).subscribe((res: any) => {
      console.log("response from cakescart", res)
      this.userdetails.cakes = [...res.data];
      this.userdetails.price=(this.userdetails.cakes.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
      
      
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  
  ngOnInit(): void {
  }
  placeorder() {
  //console.log(this.userdetails.cakedetail.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
     console.log(this.userdetails);
    //  console.log(this.totalprice);
    //this.userdetails = '';
    this.cs.confirmDetails = { ...this.userdetails };
    console.log(this.cs.confirmDetails);
    console.log(this.userdetails);
    this.cs.confirmFlag = "true";
   this.route.navigate(['checkout/confirm']);
  
  }
}


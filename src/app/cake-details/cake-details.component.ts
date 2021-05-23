import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { CakeService } from '../cake.service';
import {ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {
  ids: any;
  cakeobj: any;
  message: any
  cake: any;
  file: any;
  imgurl: any;
  constructor(public cakes: CakeService, private routes: ActivatedRoute,private client:HttpClient,private router:Router,private toast: ToastrService) {
    this.ids = +this.routes.snapshot.params['id'];
    console.log(this.ids);
   var apiurl = 'https://apifromashu.herokuapp.com/api/cake/';
  this.client.get(apiurl+this.ids).subscribe(
    (response: any) => {
      console.log('response from signup api', response);
      this.cakeobj = response.data;
      console.log(this.cakeobj)
      this.cake = { name: this.cakeobj.name, cakeid: this.cakeobj.cakeid, image: this.cakeobj.image, price: this.cakeobj.price, weight: this.cakeobj.weight }
    },
    (error) => {
      console.log('Error from signup api', error);
    }
  );    
  }
  
  ngOnInit(): void { }
  // add cake to cart
  add() {
    if (!localStorage.getItem("email")) {
      this.toast.warning("Please Login First", "Warning");
      setTimeout(() => {
        this.router.navigate(['/login']);  
      }, 3000)
      return;
  }
  var api = 'https://apifromashu.herokuapp.com/api/addcaketocart';
  this.client.post(api, this.cake).subscribe((response:any) => {
    console.log("add cake to cart response", response)
    if (response.message === "Added to cart") {
      this.toast.success("Cake Added to cart", "", { timeOut: 2000, positionClass:'toast-top-center'});
    }
      
  }, (error) => {
      
    console.log("add cake to cart error", error)
  })
}
}
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
  
  ngOnInit(): void {
  }
  add() {
    var api = 'https://apifromashu.herokuapp.com/api/addcaketocart';
    this.client.post(api, this.cake).subscribe((response) => {
      console.log("add cake to cart response",response)
      
    }, (error) => {
      
      console.log("add cake to cart error",error)
    })


    if (!localStorage.getItem("email")) {
      this.toast.warning("Please Login First", "Warning");
      setTimeout(() => {
        this.router.navigate(['/login']);  
      },5000)
    }
    // if (localStorage.getItem("email")) {
    //   
    //   console.log(cake);
    // }
  }
//   upload(event: any) {
//     if (event.target.files.length == 0) {
//       console.log("No file selected!");
//       return
//    }
//   let file: File = event.target.files[0];
//   var formData = new FormData();
//   formData.append('file', file);
//     console.log(formData);
  
//   // this.files.inProgress = true;
//   var api = 'https://apifromashu.herokuapp.com/api/upload';
//   this.client.post(api,formData).subscribe((res: any) => {
//     console.log("response from upload api", res)
//     this.imgurl=res.imageUrl;
//   }, (error) => {
//     console.log("error from upload api",error)
//       }
//     );
// }
}
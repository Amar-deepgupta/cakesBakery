import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cakedatas } from '../cakedata';



@Injectable({
  providedIn: 'root'
})
export class CakeService {
  cakecard: any = cakedatas;
  cakess: any = this.cakecard;
  caked: any;
  checkFlag: any = false;
  confirmFlag: any = false;
  confirmDetails: any = {};
  userdetail: any = {}
  carousel: any = [
    'assets/craousel1.jpg',
    'assets/craousel2.jpg',
    'assets/craousel3.jpg',
    'assets/craousel4.jpg',
    'assets/craousel5.jpg',
    
  ];
  userdetails: any = [];
  constructor(private client:HttpClient) { }
  ValidateEmail(inputText:any)
  {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.match(mailformat))
  {
  
  
  return true;
  }
  else
  {
  alert("Please! enter the valid mail id");

  return false;
  }
  }
  
  // api = 'https://apifromashu.herokuapp.com/api/';
  
  //   this.client.post(this.api + 'cakecart', {}).subscribe((res: any) => {
  //     console.log("response from cakescart", res)
  //     this.userdetail.cakes = [...res.data];
  //     this.userdetail.price=(this.userdetail.cakes.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
      
      
  //   }, (error) => {
  //     console.log("error from cakescart", error)
  //   }
  //   );
  
}


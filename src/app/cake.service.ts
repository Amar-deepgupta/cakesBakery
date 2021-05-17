import { Injectable } from '@angular/core';
import { cakedatas } from '../cakedata';



@Injectable({
  providedIn: 'root'
})
export class CakeService {
  cakecard: any = cakedatas;
  cakess: any = this.cakecard;
  caked: any;
  carousel: any = [
    'assets/craousel1.jpg',
    'assets/craousel2.jpg',
    'assets/craousel3.jpg',
    'assets/craousel4.jpg',
    'assets/craousel5.jpg',
    
  ];
  userdetails: any = [];
  constructor() { }
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
}

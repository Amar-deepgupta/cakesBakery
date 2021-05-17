import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myoders',
  templateUrl: './myoders.component.html',
  styleUrls: ['./myoders.component.css']

})
export class MyodersComponent implements OnInit {
  ids: any;
  order: any = [];
  orderDetails:any=[]
  api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client: HttpClient,private htmlRef:ElementRef,private route:Router) {
    this.client.post(this.api + 'cakeorders',{}).subscribe((res: any) => {
      // console.log("response from cakescart", res)
      this.order = res.cakeorders;
      // console.log(this.order);
     this.order.forEach((e: any) => {
       const dt = new Date(e.orderdate)
       console.log(dt);
      e.orderdate=`${dt.getDate()}-${dt.getMonth()+1}-${dt.getFullYear()}`});
       
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  details(id: any) {
    document.querySelector(`#cake${id}`)?.classList.toggle('hidden');
    console.log(this.order);
    
    }
//   summary() {
//      this.route.navigate(['/cakeorders'])
// }
  ngOnInit(): void {
  }
//   address() {
//     this.route.navigate(['cakeorders/order']);
  
// }
}
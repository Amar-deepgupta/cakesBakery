import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  choosecake: any = {};
  totalprice: any = 0;
   api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client: HttpClient,private router:Router) {
    this.showing();
    
  }
  
  showing() {
    this.client.post(this.api+'cakecart', {}).subscribe((res: any) => {
      console.log("response from cakescart", res)
      this.choosecake = [...res.data];
      this.choosecake.totalprice=(this.choosecake.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
       console.log(this.choosecake);
    }, (error) => {
      console.log("error from cakescart", error)
    }
    );
  }
  ngOnInit(): void { }
  remove(i: any) {
    
    this.client.post(this.api + 'removecakefromcart', { cakeid:i } ).subscribe((res: any) => {
      console.log("response from removecart", res);
      if (res.message = "Removed  item from cart") {
        this.showing();
      }
    }, (err) => {
      console.log("error from removecart", err);
    })
  
  }
  order() {
    this.router.navigate(['/checkout']);
    
  }
  confirm() {
    
    
  }

  // ids: any;
  // order: any = [];
  // orderDetails:any=[]
  // api = 'https://apifromashu.herokuapp.com/api/';
  // constructor(private client: HttpClient, private htmlRef: ElementRef, private route: Router) {
  //   this.client.post(this.api + 'cakeorders',{}).subscribe((res: any) => {
  //     // console.log("response from cakescart", res)
  //     this.order = res.cakeorders;
  //     // console.log(this.order);
  //    this.order.forEach((e: any) => {
  //      const dt = new Date(e.orderdate)
  //      console.log(dt);
  //     e.orderdate=`${dt.getDate()}-${dt.getMonth()+1}-${dt.getFullYear()}`});
       
  //   }, (error) => {
  //     console.log("error from cakescart", error)
  //   }
  //   );
  // }
  // ngOnInit(): void {
  // }
  // details(id: any) {
  //   document.querySelector(`#cake${id}`)?.classList.toggle('hidden');
  //   console.log(this.order);
    
  // }
  
}

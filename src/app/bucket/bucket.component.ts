import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  //variables define/declaration
  choosecake: any = [];
  totalprice: any = 0;
  emptyFlag: any = false;

   api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client: HttpClient, private router: Router, private activate: ActivatedRoute) {
    this.activate.data.subscribe((res) => {
      this.choosecake = res[0].data;
      
      console.log(this.choosecake);
    })
     this.showing();
    
  }
  
  showing() {
    if (this.choosecake.length===0) {
      this.emptyFlag = true;
    }
      this.choosecake.totalprice=(this.choosecake.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
       console.log(this.choosecake);
   }
  
  ngOnInit(): void{
    
  }
  //delete the item from cart
  remove(i: any) {
    
    this.client.post(this.api + 'removecakefromcart', { cakeid:i } ).subscribe((res: any) => {
      console.log("response from removecart", res);
      if (res.message = "Removed  item from cart") {
        this.choosecake = this.choosecake.slice(i, 1);
        this.showing();
      }
    }, (err) => {
      console.log("error from removecart", err);
    })
  
  }
  order() {
    this.router.navigate(['/checkout']);
    
  }

}
    

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  choosecake: any = [];
  totalprice: any = 0;
   api = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client: HttpClient, private router: Router, private activate: ActivatedRoute) {
    this.activate.data.subscribe((res) => {
      this.choosecake = res[0].data;
      console.log(this.choosecake);
    })
     this.showing();
    
  }
  
  showing() {
    // this.client.post(this.api+'cakecart', {}).subscribe((res: any) => {
    //   console.log("response from cakescart", res)
    //   this.choosecake = [...res.data];
      this.choosecake.totalprice=(this.choosecake.reduce((acc:any,e: any) => e.price * e.quantity+acc,0))
       console.log(this.choosecake);
   }
  //, (error) => {
  //     console.log("error from cakescart", error)
  //   }
  //   );
  // }
  ngOnInit(): void{
    
  }
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

}
    

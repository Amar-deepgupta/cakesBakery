import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  flag: any = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  summary() {
    this.route.navigate(['checkout/summary'])
  }
    confirm(){
    this.flag = true;
    if (this.flag) {
      document.querySelector('#order')?.classList.remove('dis');
    }
  }
  
}

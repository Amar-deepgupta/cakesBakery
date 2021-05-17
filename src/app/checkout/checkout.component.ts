import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  flag: any = false;
  constructor(private route: Router, public cs: CakeService) { }

  ngOnInit(): void {
  }
  summary() {
    this.route.navigate(['/checkout'])
  }
  confirm() {
    this.route.navigate(['checkout/confirm'])
  }
  address() {
    this.route.navigate(['checkout/order']);
  }
  orderplaced() {
    this.route.navigate(['/myorders'])
  }
}

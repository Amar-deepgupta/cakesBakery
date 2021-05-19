import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  api = 'https://apifromashu.herokuapp.com/api/';
  constructor(public cs: CakeService,private route:Router,private client:HttpClient){}

  ngOnInit(): void {
  }
  finalize() {
    this.client.post(this.api + 'addcakeorder',this.cs.userdetail).subscribe((res: any) => {
      console.log("response from addcakeOrder", res);
       this.cs.confirmDetails = { ...this.cs.userdetail,...this.cs.userdetail.cakes };
       console.log(this.cs.confirmDetails);
    }, (error) => {
      console.log("error from upload api",error)
        }
      );
    this.route.navigate(['/cakeorders']);
    
  
}
}

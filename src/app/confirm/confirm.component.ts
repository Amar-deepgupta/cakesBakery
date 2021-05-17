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

  constructor(public cs: CakeService,private route:Router){}

  ngOnInit(): void {
  }
  placeorder() {
    this.route.navigate(['/cakeorders']);
  
}
}

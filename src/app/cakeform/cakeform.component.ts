import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cakeform',
  templateUrl: './cakeform.component.html',
  styleUrls: ['./cakeform.component.css']
})
export class CakeformComponent implements OnInit {
  addvalue: any = {}
  
  constructor() {
     }

  ngOnInit(): void {
  }
  added() {
    console.log("the enter data is:", this.addvalue);
  }
}

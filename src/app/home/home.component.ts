import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  apiurl:any = 'https://apifromashu.herokuapp.com/api/';
  constructor(private client: HttpClient) {
    this.client.get(this.apiurl + 'getuserdetails').subscribe(
      (response: any) => {
        console.log('response from login api', response);
        if (response.data.token !== localStorage.token) {
          return;
        }else{}
       },
      (error) => {
        console.log('Error from signup api', error);
      }
    );
  }
    
  

  ngOnInit(): void {
  }

}

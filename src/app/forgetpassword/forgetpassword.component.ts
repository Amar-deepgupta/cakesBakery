import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email: any;
  message: any;
  constructor(private client: HttpClient, private user: CakeService, private router: Router) { }

  ngOnInit(): void {
  }
  forgot() {
    if (this.user.ValidateEmail(this.email)) {
      //console.log('User entered', this.users);
      var apiurl = 'https://apifromashu.herokuapp.com/api/recoverpassword';
      this.client.post(apiurl, { email: this.email }).subscribe(
        (response: any) => {
          console.log('response from signup api', response);
          this.message = response.message;
          console.log(this.message);
        },
        (error) => {
          console.log('Error from signup api', error);
        }
      );
    } else {
      alert('Please enter the valid Email id');
    }
    //console.log(this.user.userdetails);
  }
}

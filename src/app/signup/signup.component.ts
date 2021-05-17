import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  users: any = {};
  constructor(
    private user: CakeService,
    private client: HttpClient,
    private router: Router
  ) {}
  message: any;
  ngOnInit(): void {}
  signup() {
    if (this.user.ValidateEmail(this.users.email)) {
      //console.log('User entered', this.users);
      var apiurl = 'https://apifromashu.herokuapp.com/api/register';
      this.client.post(apiurl, this.users).subscribe(
        (response: any) => {
          console.log('response from signup api', response);
          this.message = response.message;
          if (response.message === 'User Already Exists') {
            this.router.navigate(['/login',this.users.email]);
          }
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

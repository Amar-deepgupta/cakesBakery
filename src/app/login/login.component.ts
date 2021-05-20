import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CakeService } from '../cake.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: any = {};
  showOverlay: any = true;

  constructor(
    private check: CakeService,
    private route: Router,
    private routes: ActivatedRoute,
    private client: HttpClient,
    private toast: ToastrService
  ) {
    this.users.email = this.routes.snapshot.params['email'];
  }
  message: any;
  userdetails: any = {};
  ngOnInit(): void {}
  login() {
    if (!this.users.email || !this.users.password)
      alert('Please fill all the field');
    var apiurl = 'https://apifromashu.herokuapp.com/api/login';

    this.client.post(apiurl, this.users).subscribe(
      (response: any) => {
        console.log('response from login api', response);
        this.message = response.message;
        
       

        if (this.message !== 'Invalid Credentials') {
          this.toast.success(this.message, 'login successful');
          this.message = '';
          localStorage.setItem('email', response.email);
          localStorage.setItem('password', this.users.password);
           localStorage.setItem('token', response.token);
          this.showOverlay = false;
          this.route.navigate(['/']);
        } else {
          return;
        }
      },
      (error) => {
        console.log('Error from signup api', error);
      }
    );
  }
}

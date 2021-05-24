import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchValue: any;
  searchValues: any;
  flag: any = true;
  adminflag: any = false;
  email: any;
  file: any;
  imgurl: any;
  // fileToUpload: File ;
  constructor(private rout: Router, private client: HttpClient) {
    
  }

  ngOnInit(): void {}
  search() {
    this.searchValues = this.searchValue.trim();
    
    if (!this.searchValues) return;
    this.rout.navigate(['/search'], { queryParams: { p: this.searchValues } });
  }
  
  
  ngDoCheck() {
    if (localStorage.email === 'amardeep92aec@gmail.com') {
      this.adminflag = true;
    }
    this.email = localStorage.getItem("email");
    if (this.email) {
      this.flag = false;
    
    } else {
      this.flag = true;
    }
  }
  logout() {
    localStorage.removeItem('email')
   
    localStorage.removeItem("token");
    this.rout.navigate(['/login']);
     this.flag = true;
    this.adminflag = false;
  }
  admin() {
    this.rout.navigate(['/admin']);
  }
  carts() {
    this.rout.navigate(['/cart']);
  }
  myorder() {
    this.rout.navigate(['/cakeorders']);
  }
//   upload(event: any) {
//     const data: any = event.target.querySelector('input');
//     // console.log(data);
//     if (data.files.length == 0) {
//       alert("No file selected!");
//       return
//    }
//   let file: File = data.files[0];
//   var formData = new FormData();
//   formData.append('file', file);
//     console.log(file);
  
//   // this.files.inProgress = true;
//   var api = 'https://apifromashu.herokuapp.com/api/upload';
//   this.client.post(api,formData).subscribe((res: any) => {
//     console.log("response from upload api", res)
//     this.imgurl=res.imageUrl;
//   }, (error) => {
//     console.log("error from upload api",error)
//       }
//     );
// }
 
  }

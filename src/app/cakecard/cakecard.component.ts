import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cakecard',
  templateUrl: './cakecard.component.html',
  styleUrls: ['./cakecard.component.css'],
})
export class CakecardComponent implements OnInit {
  cakecards: any = this.cakes.cakess;
  data: any;
  flag: any = false;
  constructor(
    public cakes: CakeService,
    private rout: Router,
    private client: HttpClient
  ) {
    var apiurl = 'https://apifromashu.herokuapp.com/api/allcakes';
    this.client.get(apiurl).subscribe(
      (response: any) => {
        console.log('response from allcakes', response);
        this.data = response.data;
        console.log(this.data);
      },
      (error) => {
        if (error.statusText="Not Found") {
          this.flag = true;
        }
        console.log('Error from signup api', error);
      }
    );
  }

  ngOnInit(): void {}
  cakedetail(i: any) {
    this.rout.navigate(['/cake', this.data[i].cakeid]);
     console.log(this.data[i].cakeid);
  }
}

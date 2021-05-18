import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
})
export class SearchpageComponent implements OnInit {
  min: any;
  max: any;
  cakedata: any;
  message: any;
  cakesort: any =[];
  constructor(
    public cakes: CakeService,
    private route: ActivatedRoute,
    private client: HttpClient,
    private toast:ToastrService
  ) {
    var url = 'https://apifromashu.herokuapp.com/api/searchcakes?q=';
    this.route.queryParams.subscribe((e: any) => {
      if (e.q) {
        console.log(url + e.q);
            this.client.get(url+e.q).subscribe(
              (response: any) => {
                console.log('response from signup api', response);
                this.cakedata = response.data;
                this.cakesort = this.cakedata;
                if (!this.cakedata.length) {
                  alert("there is no such cake");
                }
                console.log(this.cakedata);
               },
              (error) => {
                console.log('Error from signup api', error);
              }
            );
              // this.cakes.cakecard.filter((ev: any) =>
              // ev.name.toLowerCase().includes(e.q.toLowerCase()));

          } else {
          
      }
    });
  }

  ngOnInit(): void {}

  filters() {
    if (!this.min && !this.max) {
      this.toast.warning(this.message, "Can't search empty with value", { timeOut: 2000, positionClass: 'toast-top-center' });
      this.cakesort = this.cakedata;
    }
    if (this.min || this.max)  {
      this.cakesort = this.cakedata.filter(
        (fil: any) =>
          (this.min ? fil.price >= this.min : true) &&
          (this.max ? fil.price <= this.max : true)
      );
      console.log(this.cakesort);
    }
    if(this.min>this.max)
     {
      this.toast.warning(this.message, 'Searching a wrong way ', { timeOut: 2000, positionClass: 'toast-top-center' });
      this.cakesort = this.cakedata;
     }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CakeResolverService implements Resolve<any> {

  constructor( private http:HttpClient) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
      console.log(state.url);
      return this.http.post("https://apifromashu.herokuapp.com/api/cakecart", {});
      
    }
  
  }


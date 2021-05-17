import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';
import { ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AutheninterceptorService implements HttpInterceptor{

  constructor(private toastr :ToastrService) {}
  
  
   intercept(request: HttpRequest<any>, next: HttpHandler){
    //  alert("working");
   
    if (localStorage.token) {

      request = request.clone({
        setHeaders: { authtoken: localStorage.token }
          
      }
      
      )
    }
    return next.handle(request)
  }
}

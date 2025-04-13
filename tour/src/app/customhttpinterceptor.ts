import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loadingservice';
import { finalize } from 'rxjs/operators';
import { User } from './user';
@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    isloading = false;


    constructor(private loadingService: LoadingService) { }

    // loadingService is for Spinner.. just component
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("From Interceptor", req);
        this.loadingService.show()

    //   let httpHeaders = new HttpHeaders();
    //   if (window.sessionStorage.getItem('userdetails')) {
    //    this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    //      console.log("this.user ", this.user)
    //    }
        // const authToken =window.sessionStorage.getItem('Authorization');
        // const authRequest = req.clone({
        //     setHeaders: { Authorization: `Bearer ${authToken}` }
        //   });

        return next.handle(req)
            .pipe(
                finalize(() => {
                    // Hide the spinner when the request is completed (either success or error)
                    this.loadingService.hide();
                })
            );
    }
}
// Use the finalize operator to perform an action when the observable completes
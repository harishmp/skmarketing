import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {environment} from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public token: string;

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this.token = window.localStorage.getItem('access_token');

    if (request.url.indexOf('googleapis') == -1) {
      if(environment.production) {
        // dont do anything
      } else {
        // if dev add token to request
          request = request.clone({
            headers: request.headers.set('Authorization','Bearer'+ ' ' +this.token)
          });
      }
    }
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log('Session Got Expired');
          window.location.href = '/';
        }
      }
    });
  }
}

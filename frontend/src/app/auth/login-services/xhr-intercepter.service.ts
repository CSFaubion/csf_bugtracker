import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * This interceptor automatiically adds X-Requested-With: XMLHttpRequest header
 *  to prevent the browser from adding the httpbasic challenge dialog while unauthenticated.
 */
@Injectable({
  providedIn: 'root',
})
export class XhrIntercepterService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest'),
    });
    return next.handle(xhr);
  }
}

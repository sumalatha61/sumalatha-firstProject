import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AppInterceptor implements HttpInterceptor {

    constructor(private router: Router) {

    }
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const API_SUBSCRIPTION_KEY: string = '123456';
        const Authorization: string = "Bearer 121233244646464644";

        var transformedReq = httpRequest.clone({
            setHeaders: { API_SUBSCRIPTION_KEY, Authorization },
            headers: httpRequest.headers.set('Content-Type', 'application/json')
        });

        return next.handle(transformedReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (event.status == 401) {
                        this.router.navigate(['/un-authorized']);
                    }
                }
                return event;
            })
        )
    }
}
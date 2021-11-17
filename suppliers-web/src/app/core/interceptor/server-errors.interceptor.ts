
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { catchError, retry, tap } from 'rxjs/operators';
import { RETRIES } from '../base-constants';
import { NotifService } from '../service/notif.service';

@Injectable({
    providedIn: 'root'
})

export class ServerErrorsInterceptor implements HttpInterceptor {

    constructor(
        private notif: NotifService,
    ) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(retry(RETRIES)).
            pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    if (event.body && event.body.error === true && event.body.errorMessage) {
                        throw new Error(event.body.errorMessage);
                    }
                }
            })).pipe(catchError((err) => {
                if (err.status === 400) {
                    this.notif.warning(err.message, 'ERROR 400', 5000);
                } else if (err.status === 404) {
                    this.notif.warning(err.error.message, 'ERROR 404', 5000);
                } else if (err.status === 403 || err.status == 401) {
                    this.notif.warning(err.error.message, 'ERROR 403', 5000);
                } else if (err.status === 500) {
                    this.notif.warning(err.error.message, 'ERROR 500', 5000);
                } else {
                    this.notif.warning(err.error.message, 'ERROR', 5000);
                }
                return EMPTY;
            }));
    }

}
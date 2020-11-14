import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // TODO accesstoken uit cookie/localstorage halen
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0NjY1Nzg4NC1iMzRmLTQ0MTQtNTY2Yi0wOGQ4ODc0MjI0MjAiLCJSb2xlSWQiOiIxIiwibmJmIjoxNjA1MjY4OTYzLCJleHAiOjE2MDUzNTUzNjMsImlhdCI6MTYwNTI2ODk2M30.5O9WkJj7R1xk0EUIMhN2XNMe_tQ5qm1WFSrwsSrQbxc";

        req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });

        return next.handle(req);
    }

}
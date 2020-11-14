import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // TODO accesstoken uit cookie/localstorage halen
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI0NjY1Nzg4NC1iMzRmLTQ0MTQtNTY2Yi0wOGQ4ODc0MjI0MjAiLCJSb2xlSWQiOiIxIiwibmJmIjoxNjA1MzU2MTI4LCJleHAiOjE2MDU0NDI1MjgsImlhdCI6MTYwNTM1NjEyOH0.9y1yUVicm1o-0qge_E7pSVrOhBLLo_dNMmU36_txIhI"; 

        req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });

        return next.handle(req);
    }

}
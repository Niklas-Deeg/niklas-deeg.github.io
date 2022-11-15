import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        //const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: 'Bearer ${this.authService.getTocken()}'
            }
        });
        return next.handle(req);
    }
}

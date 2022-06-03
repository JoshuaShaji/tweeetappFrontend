import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuardRoute implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean | UrlTree> | Observable<boolean |UrlTree> | UrlTree {
    return this.authService.user.pipe(take(1),
      map((user) => {
        const isAuth = user ? true : false;
        if (!isAuth) {
          return true;
        } else {
          return this.router.createUrlTree(['/postTweet']);
        }
      })
    );
  }
}
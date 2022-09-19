import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainServicesService } from './services/main-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private MainServicesService: MainServicesService, private router: Router) {

  }
  canActivate(): boolean {
    if (!this.MainServicesService.gettoken()) {
      this.router.navigateByUrl("/login");
    }
    return this.MainServicesService.gettoken();
  }

}

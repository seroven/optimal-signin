import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isLoggedGuard: CanMatchFn = (route, state) => {

  

    const userInStorage = localStorage.getItem('userLogged');

    const router = inject(Router);
    if (userInStorage == null){
      return router.createUrlTree(['/auth/signin']);
    } else {
      return true;
    }
};

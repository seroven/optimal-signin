import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { EnumTypeMessage } from 'src/app/shared/enums/type-message.enum';

export const isLoggedGuard: CanMatchFn = (route, state) => {

  

    const userInStorage = localStorage.getItem('userLogged');

    const router = inject(Router);
    const toastService = inject(ToastService);
    const authService = inject(AuthService);
    if (userInStorage == null){
      return router.createUrlTree(['/auth/signin']);
    } else {
      if(authService.verifyTokenExpiration()){
        toastService.showMessage(EnumTypeMessage.EXPIRED_TOKEN);
        authService.logout();
        return router.createUrlTree(['/auth/signin']);
      } else {
        return true;
      }
    }
};

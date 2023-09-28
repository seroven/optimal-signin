import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { EnumTypeMessage } from 'src/app/shared/enums/type-message.enum';

export const isNotLoggedGuard: CanMatchFn = (route, state) => {

    const userInStorage = localStorage.getItem('userLogged');

    const router = inject(Router);
    const toastService = inject(ToastService);
    if (userInStorage == null){
      return true;
    } else {
      toastService.showMessage(EnumTypeMessage.USER_LOGGED);
      return router.createUrlTree(['/panel/client']);
    }
};

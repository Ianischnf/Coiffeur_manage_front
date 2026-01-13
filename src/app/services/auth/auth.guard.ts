import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';


//CONNECTEE OU NON
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  const ok = authService.isLoggedIn();

  console.log('[AuthGuard] target:', state.url);
  console.log('[AuthGuard] token exists:', !!token);
  console.log('[AuthGuard] isLoggedIn:', ok);

  return ok ? true : router.createUrlTree(['/authentification']);

}
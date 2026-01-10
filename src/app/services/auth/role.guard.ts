import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";


// ROLE AUTORISE
export const roleGuard: CanActivateFn = (route) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const allowedRoles = route.data?.['roles'];
    const role = auth.getRole();

    if(role && allowedRoles.includes(role)) return true;

    router.navigate(['/home']);

    return false;
}
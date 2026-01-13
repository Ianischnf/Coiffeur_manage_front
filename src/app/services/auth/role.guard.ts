import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";


// ROLE AUTORISE
export const roleGuard: CanActivateFn = (route) => {
    const auth = inject(AuthService);
    const router = inject(Router);


    const allowedRoles = (route.data?.['roles'] ?? []) as string[];
    const roleRaw = auth.getRole();
    const roleNormalized = (roleRaw ?? '').replace('ROLE_', '');

    console.log('[RoleGuard] url:', router.url);
    console.log('[RoleGuard] allowedRoles:', allowedRoles);
    console.log('[RoleGuard] roleRaw:', roleRaw);
    console.log('[RoleGuard] roleNormalized:', roleNormalized);

    if (!Array.isArray(allowedRoles) || allowedRoles.length === 0) {
        router.navigate(['/home']);
        return false;
    }

    if (allowedRoles.includes(roleNormalized)) {
        return true;
    }

    router.navigate(['/home']);

    return false;
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServiceClientComponent } from './pages/service/service-client.component';
import { roleGuard } from './services/auth/role.guard';
import { authGuard } from './services/auth/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { ServiceRedirectComponent } from './pages/service-redirect/service-redirect.component';



const routes: Routes = [
  { path: '', redirectTo: 'authentification', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'service',
    canActivate: [authGuard],
    component: ServiceRedirectComponent
  },
  {
    path: 'client',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['CLIENT'] },
    children: [
      { path: 'booking', component: ServiceClientComponent }
    ]
  },
  {
    path: 'hairdresser',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['HAIRDRESSER'] },
    children: [
      { path: 'appointments', component: AdminComponent }
    ]
  },

  { path: '**', redirectTo: 'authentification' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServiceClientComponent } from './pages/service/service-client/service-client.component';
import { roleGuard } from './services/auth/role.guard';
import { authGuard } from './services/auth/auth.guard';
import { ServiceRedirectComponent } from './pages/service-redirect/service-redirect.component';
import { ServiceHairdresserComponent } from './pages/service/service-hairdresser/service-hairdresser.component';



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
    canActivate: [authGuard],
    children: [
      {
        path: 'booking',
        component: ServiceClientComponent,
        canActivate: [roleGuard],
        data: { roles: ['CLIENT'] },
      }
    ]
  },
  {
    path: 'hairdresser',
    canActivate: [authGuard],
    children: [
      {
        path: 'appointments',
        component: ServiceHairdresserComponent,
        canActivate: [roleGuard],
        data: { roles: ['HAIRDRESSER'] },
      }
    ]
  },

  { path: '**', redirectTo: 'authentification' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
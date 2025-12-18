import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServiceComponent } from './pages/service/service.component';



const routes: Routes = [
  { path: '', redirectTo: 'authentification', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'register', component : RegisterComponent}, 
  { path: 'services', component : ServiceComponent}, 
  { path: '**', redirectTo: 'authentification' }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';



const routes: Routes = [
  { path: '', redirectTo: 'authentification', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: '**', redirectTo: 'authentification' }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { AppRoutingModule } from './app.routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { BlockLoginRegisterComponent } from './components/block-login-register/block-login-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Navigation } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AccordionComponent } from './pages/service/components/accordion/accordion.component';
import { ServiceComponent } from './pages/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthentificationComponent,
    RegisterComponent,
    BlockLoginRegisterComponent,
    AccordionComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

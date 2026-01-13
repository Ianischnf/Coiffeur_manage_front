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
import { ServiceClientComponent } from './pages/service/service-client/service-client.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ButtonComponent } from './components/button/button.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SelectComponent } from './components/select/select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TextereaComponent } from './components/texterea/texterea.component';
import { ServiceHairdresserComponent } from './pages/service/service-hairdresser/service-hairdresser.component';
import { AppointmentTableComponent } from './pages/service/components/appointment-table/appointment-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceHairdresserComponent,
    AuthentificationComponent,
    RegisterComponent,
    BlockLoginRegisterComponent,
    AccordionComponent,
    ServiceClientComponent,
    ButtonComponent,
    SelectComponent,
    TextereaComponent,
    AppointmentTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    DatePickerComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

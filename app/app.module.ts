import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { MatTableModule } from '@angular/material'  
import { HttpinterceptService } from './services/httpintercept.service';
import { ClientComponent } from './components/client/client.component';
import { UpdateComponent } from './components/update/update.component';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule,
MatNativeDateModule, MatSortModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddClientComponent } from './components/add-client/add-client.component'
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
    ListComponent,
    ClientComponent,
    UpdateComponent,
    AddClientComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' 
    })
  ],
  
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpinterceptService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

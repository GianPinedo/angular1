import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { IndexComponent } from './pages/inicio/inicio.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HistoryComponent } from './pages/history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    ModalContentComponent,
    IndexComponent,
    DetailComponent,
    HistoryComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forRoot([
      {path: '', redirectTo: '/index', pathMatch: 'full' },
      {path: 'inicio', component: DashboardComponent },
      {path: 'login', component: LoginComponent },
      {path: 'index', component: IndexComponent },
      {path: 'index/:search', component: IndexComponent },
      {path: 'detail/:id', component: DetailComponent },
      {path: 'history', component: HistoryComponent }
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { IndexComponent } from "./pages/inicio/inicio.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";


const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path: 'inicio', component: DashboardComponent },
    {path: 'login', component: LoginComponent },
    {path: 'index', component: IndexComponent },
    {path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule, BrowserModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ClientComponent } from './components/client/client.component';
import { UpdateComponent } from './components/update/update.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import {AuthGuard} from './guards/auth.guard'
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [

      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'register', component:RegisterComponent, canActivate:[AuthGuard] },
      {path:'login', component:LoginComponent},
      {path:'list', component:ListComponent, canActivate:[AuthGuard]},
      {path:'welcome', component:WelcomeComponent},
      {path:'info/:id', component:ClientComponent, canActivate:[AuthGuard]},
      {path:'update/:id', component:UpdateComponent,canActivate:[AuthGuard] },
      {path:'add', component:AddClientComponent, canActivate:[AuthGuard]},
      {path:'logout', component:LogoutComponent, canActivate:[AuthGuard]}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

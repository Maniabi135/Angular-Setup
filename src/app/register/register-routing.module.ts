import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path     : '',
    component: RegisterComponent
  },
  {
    path        : 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path        : 'signup',
    loadChildren: './signup/signup.module#SignupModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

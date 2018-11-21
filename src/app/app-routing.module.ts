import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path        : '',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path        : 'account/:id',
    loadChildren: './account/account.module#AccountModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

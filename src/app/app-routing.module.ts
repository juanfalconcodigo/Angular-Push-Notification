import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('src/app/pages/login/login.module').then((m) => m.LoginModule) },
  { path: 'home', loadChildren: () => import('src/app/pages/home/home.module').then((m) => m.HomeModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

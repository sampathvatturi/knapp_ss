import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { LayoutAppComponent } from './layouts/layout-app/layout-app.component';

const routes: Routes = [
  { path: 'internal/auth', component: FullLayoutComponent, loadChildren: () => import('./apps/auth/auth.module').then(m => m.AuthModule) },
  { path: 'internal', component: LayoutAppComponent, loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },

  // { path: 'auth', component: FullLayoutComponent, loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },

  // { path: 'internal/expenses'         , component: LayoutAppComponent, canActivate: [AuthGuardService], loadChildren: () => import('./apps/expenses/expenses.module').then(m => m.ExpensesModule) },
  { path: '**', redirectTo: 'internal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

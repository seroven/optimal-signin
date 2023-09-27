import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLayoutComponent } from './layout/panel-layout/panel-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'panel',
    component: PanelLayoutComponent,
    children: [
      {
        path: 'client',
        loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)
      }
    ]
  },
  { 
    path: '**',
    redirectTo: '/auth/error'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

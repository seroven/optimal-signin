import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { isNotLoggedGuard } from './guards/is-not-logged.guard';


const routes:Route[] = [
  {
    path: 'signin',
    canMatch: [isNotLoggedGuard],
    component: SigninPageComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

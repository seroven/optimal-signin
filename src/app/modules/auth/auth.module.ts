import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    SigninPageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

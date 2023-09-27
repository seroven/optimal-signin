import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientMainPageComponent } from './pages/client-main-page/client-main-page.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [
    ClientMainPageComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientMainPageComponent } from './pages/client-main-page/client-main-page.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ClientMainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelLayoutComponent } from './panel-layout.component';
import { PanelLayoutHeaderComponent } from './panel-layout-header/panel-layout-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PanelLayoutComponent,
    PanelLayoutHeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    SharedModule
  ]
})
export class PanelLayoutModule { }

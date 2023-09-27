import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelLayoutComponent } from './panel-layout.component';
import { PanelLayoutHeaderComponent } from './panel-layout-header/panel-layout-header.component';
import { PanelLayoutFooterComponent } from './panel-layout-footer/panel-layout-footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PanelLayoutComponent,
    PanelLayoutHeaderComponent,
    PanelLayoutFooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ]
})
export class PanelLayoutModule { }

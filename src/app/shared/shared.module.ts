import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgSharedModule } from './modules/prime-ng-shared.module';
import { UtilitiesSharedModule } from './modules/utilities-shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeNgSharedModule,
    UtilitiesSharedModule
  ],
  exports: [
    PrimeNgSharedModule,
    UtilitiesSharedModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ClientMainPageComponent } from './pages/client-main-page/client-main-page.component';


const routes:Route[] = [
  {
    path: '',
    component: ClientMainPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

import { Component } from '@angular/core';
import { items } from './data/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent {
  public items = items;
  public openSidebar:boolean = true;

  constructor(private route:Router){}

  redirect(path:string){
    this.route.navigate([path]);
  }

  toggleSidebar(value:boolean){
    this.openSidebar = value;
  }

}


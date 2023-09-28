import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-panel-layout-header',
  templateUrl: './panel-layout-header.component.html',
  styleUrls: ['./panel-layout-header.component.scss'],
})
export class PanelLayoutHeaderComponent {
  items: MenuItem[] | undefined;

  constructor(private authService:AuthService) {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Sign out',
            icon: 'pi pi-sign-out',
            command: () => {authService.logout()}
          }
        ]
      }
    ];
  }


}

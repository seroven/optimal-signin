import {
  ItemGroupInterface,
  ItemSidebarInterface,
} from '../interfaces/item-sidebar.interface';

export const items: ItemGroupInterface[] = [
  {
    title: 'Administration',
    items: [
      {
        name: 'Clients',
        path: '/panel/client',
        icon: 'pi-user'
      }
    ]
  }
];

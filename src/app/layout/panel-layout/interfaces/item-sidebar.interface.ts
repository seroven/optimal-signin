export interface ItemSidebarInterface{
    name: string;
    path: string;
    icon: string;
}

export interface ItemGroupInterface{
    title:string;
    items: ItemSidebarInterface[];
}
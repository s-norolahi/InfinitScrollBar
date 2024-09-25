import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-click-menu-row',
  templateUrl: './right-click-menu-row.component.html',
  styleUrls: ['./right-click-menu-row.component.css']
})
export class RightClickMenuRowComponent
{

  items: Item[] = [
    { name: 'Item 1', value: 1 },
    { name: 'Item 2', value: 2 },
    { name: 'Item 3', value: 3 },
    { name: 'Item 4', value: 4 },
  ];

  selectedItem: Item | null = null;
  menuPosition = { x: '0px', y: '0px' };

  showMenu(event: MouseEvent, item: Item)
  {
    event.preventDefault();  // Prevent the default context menu
    this.selectedItem = item;
    this.menuPosition = {
      x: `${event.clientX}px`,
      y: `${event.clientY}px`
    };
  }

  hideMenu()
  {
    this.selectedItem = null;
  }

  performAction(action: string)
  {
    console.log(`Action performed: ${action} on ${this.selectedItem?.name}`);
    this.hideMenu();
  }
}
interface Item
{
  name: string;
  value: number;
}
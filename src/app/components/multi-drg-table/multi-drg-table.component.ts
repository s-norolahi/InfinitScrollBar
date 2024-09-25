
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-multi-drg-table',
  templateUrl: './multi-drg-table.component.html',
  styleUrls: ['./multi-drg-table.component.css']
})
export class MultiDrgTableComponent
{

  constructor() { }

  items: Item[] = [
    { name: 'Item 1', value: 1 },
    { name: 'Item 2', value: 2 },
    { name: 'Item 3', value: 3 },
    { name: 'Item 4', value: 4 },
  ];

  drop(event: CdkDragDrop<Item[]>)
  {
    const previousIndex = this.items.findIndex(item => item.selected);
    const selectedItems = this.items.filter(item => item.selected);

    // Move the selected items to the new position
    if (previousIndex !== event.currentIndex && selectedItems.length)
    {
      // Remove selected items from the original array
      this.items = this.items.filter(item => !item.selected);
      // Insert selected items at the new index
      this.items.splice(event.currentIndex, 0, ...selectedItems);
    }
  }

}


interface Item
{
  name: string;
  value: number;
  selected?: boolean;
}
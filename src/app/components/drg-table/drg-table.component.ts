import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drg-table',
  templateUrl: './drg-table.component.html',
  styleUrls: ['./drg-table.component.css']
})
export class DrgTableComponent
{

  items: Item[] = [
    { name: 'Item 1', value: 1 },
    { name: 'Item 2', value: 2 },
    { name: 'Item 3', value: 3 },
    { name: 'Item 4', value: 4 },
  ];

  drop(event: CdkDragDrop<Item[]>)
  {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

}

interface Item
{
  name: string;
  value: number;
}
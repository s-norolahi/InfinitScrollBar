import { Component, OnInit } from '@angular/core';
import { GridColumn } from '../editable-grid/editable-grid.component';
import { InputCellComponent } from '../editable-grid/relatedComponents/input-cell/input-cell.component';
import { SelectCellComponent } from '../editable-grid/relatedComponents/select-cell/select-cell.component';

@Component({
  selector: 'app-new-grid',
  templateUrl: './new-grid.component.html',
  styleUrls: ['./new-grid.component.css']
})
export class NewGridComponent
{
  columns: GridColumn[] = [
    { col: 'firstName', title: 'نام', component: InputCellComponent },
    { col: 'gender', title: 'جنسیت', component: SelectCellComponent },
    { col: 'lastName', title: 'نام خانوادگی', component: InputCellComponent }
  ];
  data: any[] = [
    { 'firstName': 'saman', 'lastName': 'norolahi', 'gender': '1' },
    { 'firstName': 'sadra', 'lastName': 'norolahi', 'gender': '2' },
    { 'firstName': 'samad', 'lastName': 'norolahi', 'gender': '1' },
  ];
  constructor() { }
  removeRow(item: any)
  {
    this.data.splice(this.data.findIndex(itm => itm === item), 1);
  }

}

import { Component, OnInit } from '@angular/core';
import { DynamicCellComponent } from '../DynamicCellComponent';

@Component({
  selector: 'app-select-cell',
  templateUrl: './select-cell.component.html',
  styleUrls: ['./select-cell.component.css']
})
export class SelectCellComponent extends DynamicCellComponent
{
  emitChange()
  {
    this.cellChange.emit(this.cellData);
  }
}
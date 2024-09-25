import { Component, OnInit } from '@angular/core';
import { DynamicCellComponent } from '../DynamicCellComponent';

@Component({
  selector: 'app-input-cell',
  templateUrl: './input-cell.component.html',
  styleUrls: ['./input-cell.component.css']
})
export class InputCellComponent extends DynamicCellComponent
{
  emitChange()
  {
    this.cellChange.emit(this.cellData);
  }
}

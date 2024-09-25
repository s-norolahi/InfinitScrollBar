import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { EditableGridComponent } from './components/editable-grid/editable-grid.component';
import { InputCellComponent } from './components/editable-grid/relatedComponents/input-cell/input-cell.component';
import { SelectCellComponent } from './components/editable-grid/relatedComponents/select-cell/select-cell.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DrgTableComponent } from './components/drg-table/drg-table.component';
import { NewGridComponent } from './components/new-grid/new-grid.component';
import { MultiDrgTableComponent } from './components/multi-drg-table/multi-drg-table.component';
import { RightClickMenuRowComponent } from './components/right-click-menu-row/right-click-menu-row.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent,
    EditableGridComponent,
    InputCellComponent,
    SelectCellComponent,
    DrgTableComponent,
    NewGridComponent,
    MultiDrgTableComponent,
    RightClickMenuRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

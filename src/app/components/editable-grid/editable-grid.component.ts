import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { InputCellComponent } from './relatedComponents/input-cell/input-cell.component';
import { SelectCellComponent } from './relatedComponents/select-cell/select-cell.component';

@Component({
  selector: 'app-editable-grid',
  templateUrl: './editable-grid.component.html',
  styleUrls: ['./editable-grid.component.css']
})
export class EditableGridComponent implements AfterViewInit
{
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;
  @ViewChild('dynamicContainerNew', { read: ViewContainerRef }) dynamicContainerNew!: ViewContainerRef;
  @ViewChildren('dynamicContainerNew', { read: ViewContainerRef }) dynamicContainers!: QueryList<ViewContainerRef>;
  columns: GridColumn[] = [
    { col: 'firstName', title: 'نام', component: InputCellComponent },
    { col: 'gender', title: 'جنسیت', component: SelectCellComponent },
    { col: 'lastName', title: 'نام خانوادگی', component: InputCellComponent }
  ];
  newData: any[] = [
    { 'firstName': 'saman', 'lastName': 'norolahi', 'gender': '1' },
    { 'firstName': 'sadra', 'lastName': 'norolahi', 'gender': '2' },
    { 'firstName': 'samad', 'lastName': 'norolahi', 'gender': '1' },
  ];
  data = [
    [{ component: InputCellComponent, value: 'samand' }, { component: SelectCellComponent, value: '1' }, { component: InputCellComponent, value: 'nourollahi' }],
    [{ component: InputCellComponent, value: 'saman' }, { component: SelectCellComponent, value: '2' }, { component: InputCellComponent, value: 'norollahi' }],
    [{ component: InputCellComponent, value: 'sadra' }, { component: SelectCellComponent, value: '1' }, { component: InputCellComponent, value: 'noorollahi' }]
  ];

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterViewInit()
  {
    //this.createDynamicCells();
    this.createDynamicCellsNew();
  }

  createDynamicCells()
  {
    this.data.forEach((row) =>
    {
      row.forEach((cell) =>
      {
        const factory = this.resolver.resolveComponentFactory(cell.component);
        const componentRef = this.dynamicContainer.createComponent(factory);
        componentRef.instance.cellData = { value: cell.value };
        componentRef.instance.cellChange.subscribe((data: any) =>
        {
          cell.value = data.value;
        });
      });
    });
  }
  createDynamicCellsNew()
  {
    this.newData.forEach((data, index) =>
    {
      this.createRow(data, (index * 3));
    });
  }

  submitData()
  {
    console.log(this.newData, 'data');
  }
  removeRow(item: any)
  {
    this.newData.splice(this.newData.findIndex(itm => itm === item), 1);
  }
  addRow()
  {
    let object = { 'firstName': 'qq', 'lastName': 'e', 'gender': '1' }
    this.newData.push(object);
    setTimeout(() =>
    {
      console.log(this.newData.length, this.columns.length);
      this.createRow(object, (this.newData.length - 1) * this.columns.length);
    }, 10);

  }
  createRow(object: any, id: number)
  {
    this.columns.forEach((cell: GridColumn) =>
    {
      const factory = this.resolver.resolveComponentFactory(cell.component);
      const container = this.dynamicContainers.toArray()[id];
      console.log(container, 'container');
      //const componentRef = this.dynamicContainerNew.createComponent(factory);
      const componentRef = container.createComponent(factory);
      componentRef.instance.cellData = { value: object[cell.col] };
      componentRef.instance.cellChange.subscribe((inputData: any) =>
      {
        object[cell.col] = inputData.value;
      });
      id++;
    });
  }
}


export interface GridColumn
{
  col: string,
  title: string,
  component: typeof InputCellComponent
}
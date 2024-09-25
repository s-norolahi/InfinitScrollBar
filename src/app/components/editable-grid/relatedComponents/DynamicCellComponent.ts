import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dynamic-cell',
    template: '',
})
export class DynamicCellComponent
{
    @Input() cellData: any;
    @Output() cellChange = new EventEmitter<any>();
}
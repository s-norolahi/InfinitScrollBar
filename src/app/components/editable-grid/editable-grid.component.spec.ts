import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableGridComponent } from './editable-grid.component';

describe('EditableGridComponent', () => {
  let component: EditableGridComponent;
  let fixture: ComponentFixture<EditableGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDrgTableComponent } from './multi-drg-table.component';

describe('MultiDrgTableComponent', () => {
  let component: MultiDrgTableComponent;
  let fixture: ComponentFixture<MultiDrgTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDrgTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDrgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

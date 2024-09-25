import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrgTableComponent } from './drg-table.component';

describe('DrgTableComponent', () => {
  let component: DrgTableComponent;
  let fixture: ComponentFixture<DrgTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrgTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

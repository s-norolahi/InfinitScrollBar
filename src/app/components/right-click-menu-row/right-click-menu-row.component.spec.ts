import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightClickMenuRowComponent } from './right-click-menu-row.component';

describe('RightClickMenuRowComponent', () => {
  let component: RightClickMenuRowComponent;
  let fixture: ComponentFixture<RightClickMenuRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightClickMenuRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightClickMenuRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

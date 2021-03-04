import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubsubcategoryComponent } from './list-subsubcategory.component';

describe('ListSubsubcategoryComponent', () => {
  let component: ListSubsubcategoryComponent;
  let fixture: ComponentFixture<ListSubsubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubsubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

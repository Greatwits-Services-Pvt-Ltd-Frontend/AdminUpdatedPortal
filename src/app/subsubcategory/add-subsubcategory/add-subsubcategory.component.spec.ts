import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubsubcategoryComponent } from './add-subsubcategory.component';

describe('AddSubsubcategoryComponent', () => {
  let component: AddSubsubcategoryComponent;
  let fixture: ComponentFixture<AddSubsubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubsubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

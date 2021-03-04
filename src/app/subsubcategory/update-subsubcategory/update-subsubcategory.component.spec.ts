import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubsubcategoryComponent } from './update-subsubcategory.component';

describe('UpdateSubsubcategoryComponent', () => {
  let component: UpdateSubsubcategoryComponent;
  let fixture: ComponentFixture<UpdateSubsubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubsubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndUpdateCategoryComponent } from './create-and-update-category.component';

describe('CreateAndUpdateCategoryComponent', () => {
  let component: CreateAndUpdateCategoryComponent;
  let fixture: ComponentFixture<CreateAndUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndUpdateCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

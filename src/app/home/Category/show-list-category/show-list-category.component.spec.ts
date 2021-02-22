import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListCategoryComponent } from './show-list-category.component';

describe('ShowListCategoryComponent', () => {
  let component: ShowListCategoryComponent;
  let fixture: ComponentFixture<ShowListCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

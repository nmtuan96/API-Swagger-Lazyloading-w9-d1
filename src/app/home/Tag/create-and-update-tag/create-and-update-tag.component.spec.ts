import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndUpdateTagComponent } from './create-and-update-tag.component';

describe('CreateAndUpdateTagComponent', () => {
  let component: CreateAndUpdateTagComponent;
  let fixture: ComponentFixture<CreateAndUpdateTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndUpdateTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndUpdateTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

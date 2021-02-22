import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListTagComponent } from './show-list-tag.component';

describe('ShowListTagComponent', () => {
  let component: ShowListTagComponent;
  let fixture: ComponentFixture<ShowListTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownStatusComponent } from './dropdown-status.component';

describe('DropdownStatusComponent', () => {
  let component: DropdownStatusComponent;
  let fixture: ComponentFixture<DropdownStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

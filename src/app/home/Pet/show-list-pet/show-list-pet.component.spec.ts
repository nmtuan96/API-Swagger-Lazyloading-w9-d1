import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListPetComponent } from './show-list-pet.component';

describe('ShowListPetComponent', () => {
  let component: ShowListPetComponent;
  let fixture: ComponentFixture<ShowListPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

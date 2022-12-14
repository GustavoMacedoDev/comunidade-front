import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCargoComponent } from './edita-cargo.component';

describe('EditaCargoComponent', () => {
  let component: EditaCargoComponent;
  let fixture: ComponentFixture<EditaCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaCargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

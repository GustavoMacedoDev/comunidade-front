import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaCargoComponent } from './deleta-cargo.component';

describe('DeletaCargoComponent', () => {
  let component: DeletaCargoComponent;
  let fixture: ComponentFixture<DeletaCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaCargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCargoComponent } from './cadastra-cargo.component';

describe('CadastraCargoComponent', () => {
  let component: CadastraCargoComponent;
  let fixture: ComponentFixture<CadastraCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraCargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

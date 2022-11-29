import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaMembroComponent } from './detalha-membro.component';

describe('DetalhaMembroComponent', () => {
  let component: DetalhaMembroComponent;
  let fixture: ComponentFixture<DetalhaMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhaMembroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhaMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

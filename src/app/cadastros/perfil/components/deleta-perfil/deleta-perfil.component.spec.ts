import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaPerfilComponent } from './deleta-perfil.component';

describe('DeletaPerfilComponent', () => {
  let component: DeletaPerfilComponent;
  let fixture: ComponentFixture<DeletaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

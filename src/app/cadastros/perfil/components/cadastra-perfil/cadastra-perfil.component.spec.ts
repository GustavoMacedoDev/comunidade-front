import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPerfilComponent } from './cadastra-perfil.component';

describe('CadastraPerfilComponent', () => {
  let component: CadastraPerfilComponent;
  let fixture: ComponentFixture<CadastraPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraTipoComponent } from './cadastra-tipo.component';

describe('CadastraTipoComponent', () => {
  let component: CadastraTipoComponent;
  let fixture: ComponentFixture<CadastraTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

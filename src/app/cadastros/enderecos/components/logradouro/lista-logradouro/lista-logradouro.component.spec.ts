import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLogradouroComponent } from './lista-logradouro.component';

describe('ListaLogradouroComponent', () => {
  let component: ListaLogradouroComponent;
  let fixture: ComponentFixture<ListaLogradouroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLogradouroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMembrosMinisteriosComponent } from './lista-membros-ministerios.component';

describe('ListaMembrosMinisteriosComponent', () => {
  let component: ListaMembrosMinisteriosComponent;
  let fixture: ComponentFixture<ListaMembrosMinisteriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMembrosMinisteriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMembrosMinisteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

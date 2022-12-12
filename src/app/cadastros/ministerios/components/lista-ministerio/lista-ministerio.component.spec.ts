import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMinisterioComponent } from './lista-ministerio.component';

describe('ListaMinisterioComponent', () => {
  let component: ListaMinisterioComponent;
  let fixture: ComponentFixture<ListaMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMinisterioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

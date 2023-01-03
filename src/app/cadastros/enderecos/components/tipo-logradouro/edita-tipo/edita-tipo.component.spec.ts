import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTipoComponent } from './edita-tipo.component';

describe('EditaTipoComponent', () => {
  let component: EditaTipoComponent;
  let fixture: ComponentFixture<EditaTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

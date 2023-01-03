import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaTipoComponent } from './deleta-tipo.component';

describe('DeletaTipoComponent', () => {
  let component: DeletaTipoComponent;
  let fixture: ComponentFixture<DeletaTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

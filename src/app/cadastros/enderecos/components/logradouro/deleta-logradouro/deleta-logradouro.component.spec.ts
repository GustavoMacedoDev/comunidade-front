import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaLogradouroComponent } from './deleta-logradouro.component';

describe('DeletaLogradouroComponent', () => {
  let component: DeletaLogradouroComponent;
  let fixture: ComponentFixture<DeletaLogradouroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaLogradouroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

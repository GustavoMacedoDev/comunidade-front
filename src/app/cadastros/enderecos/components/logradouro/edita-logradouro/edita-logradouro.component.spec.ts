import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaLogradouroComponent } from './edita-logradouro.component';

describe('EditaLogradouroComponent', () => {
  let component: EditaLogradouroComponent;
  let fixture: ComponentFixture<EditaLogradouroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaLogradouroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

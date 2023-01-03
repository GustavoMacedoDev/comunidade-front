import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraLogradouroComponent } from './cadastra-logradouro.component';

describe('CadastraLogradouroComponent', () => {
  let component: CadastraLogradouroComponent;
  let fixture: ComponentFixture<CadastraLogradouroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraLogradouroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

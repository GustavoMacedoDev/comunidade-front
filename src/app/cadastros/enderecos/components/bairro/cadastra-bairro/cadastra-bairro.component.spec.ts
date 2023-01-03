import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraBairroComponent } from './cadastra-bairro.component';

describe('CadastraBairroComponent', () => {
  let component: CadastraBairroComponent;
  let fixture: ComponentFixture<CadastraBairroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraBairroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraBairroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

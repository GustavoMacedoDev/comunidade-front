import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMembroMinisterioComponent } from './cadastra-membro-ministerio.component';

describe('CadastraMembroMinisterioComponent', () => {
  let component: CadastraMembroMinisterioComponent;
  let fixture: ComponentFixture<CadastraMembroMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraMembroMinisterioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraMembroMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

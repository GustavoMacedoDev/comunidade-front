import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMinisterioComponent } from './cadastra-ministerio.component';

describe('CadastraMinisterioComponent', () => {
  let component: CadastraMinisterioComponent;
  let fixture: ComponentFixture<CadastraMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraMinisterioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

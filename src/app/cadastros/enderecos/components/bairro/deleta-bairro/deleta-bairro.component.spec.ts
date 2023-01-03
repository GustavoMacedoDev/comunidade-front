import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaBairroComponent } from './deleta-bairro.component';

describe('DeletaBairroComponent', () => {
  let component: DeletaBairroComponent;
  let fixture: ComponentFixture<DeletaBairroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaBairroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaBairroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

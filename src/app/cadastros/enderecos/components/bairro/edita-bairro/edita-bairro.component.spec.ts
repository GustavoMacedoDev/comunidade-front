import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaBairroComponent } from './edita-bairro.component';

describe('EditaBairroComponent', () => {
  let component: EditaBairroComponent;
  let fixture: ComponentFixture<EditaBairroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaBairroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaBairroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

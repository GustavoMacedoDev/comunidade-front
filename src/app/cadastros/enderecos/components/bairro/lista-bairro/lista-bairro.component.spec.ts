import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBairroComponent } from './lista-bairro.component';

describe('ListaBairroComponent', () => {
  let component: ListaBairroComponent;
  let fixture: ComponentFixture<ListaBairroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBairroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBairroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

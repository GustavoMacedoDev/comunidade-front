import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaMinisterioComponent } from './deleta-ministerio.component';

describe('DeletaMinisterioComponent', () => {
  let component: DeletaMinisterioComponent;
  let fixture: ComponentFixture<DeletaMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaMinisterioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

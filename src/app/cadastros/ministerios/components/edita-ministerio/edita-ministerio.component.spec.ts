import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaMinisterioComponent } from './edita-ministerio.component';

describe('EditaMinisterioComponent', () => {
  let component: EditaMinisterioComponent;
  let fixture: ComponentFixture<EditaMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaMinisterioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

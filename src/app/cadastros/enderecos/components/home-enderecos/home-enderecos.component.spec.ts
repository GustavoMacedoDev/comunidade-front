import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnderecosComponent } from './home-enderecos.component';

describe('HomeEnderecosComponent', () => {
  let component: HomeEnderecosComponent;
  let fixture: ComponentFixture<HomeEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEnderecosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

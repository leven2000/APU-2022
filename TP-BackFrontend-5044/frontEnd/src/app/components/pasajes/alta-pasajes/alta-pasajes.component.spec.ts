import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPasajesComponent } from './alta-pasajes.component';

describe('AltaPasajesComponent', () => {
  let component: AltaPasajesComponent;
  let fixture: ComponentFixture<AltaPasajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPasajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPasajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

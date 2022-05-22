import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDComponent } from './punto-d.component';

describe('PuntoDComponent', () => {
  let component: PuntoDComponent;
  let fixture: ComponentFixture<PuntoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

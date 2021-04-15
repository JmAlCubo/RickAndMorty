import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDimensionComponent } from './detalle-dimension.component';

describe('DetalleDimensionComponent', () => {
  let component: DetalleDimensionComponent;
  let fixture: ComponentFixture<DetalleDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

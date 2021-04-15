import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDimensionesComponent } from './lista-dimensiones.component';

describe('ListaDimensionesComponent', () => {
  let component: ListaDimensionesComponent;
  let fixture: ComponentFixture<ListaDimensionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDimensionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDimensionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

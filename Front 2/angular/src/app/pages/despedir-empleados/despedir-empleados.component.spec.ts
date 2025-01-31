import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespedirEmpleadosComponent } from './despedir-empleados.component';

describe('DespedirEmpleadosComponent', () => {
  let component: DespedirEmpleadosComponent;
  let fixture: ComponentFixture<DespedirEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespedirEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespedirEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

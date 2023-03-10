import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinEstadoComponent } from './sin-estado.component';

describe('SinEstadoComponent', () => {
  let component: SinEstadoComponent;
  let fixture: ComponentFixture<SinEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

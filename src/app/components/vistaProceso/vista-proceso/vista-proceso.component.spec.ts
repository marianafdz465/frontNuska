import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaProcesoComponent } from './vista-proceso.component';

describe('VistaProcesoComponent', () => {
  let component: VistaProcesoComponent;
  let fixture: ComponentFixture<VistaProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

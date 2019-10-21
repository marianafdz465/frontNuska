import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicaComponent } from './ceramica.component';

describe('CeramicaComponent', () => {
  let component: CeramicaComponent;
  let fixture: ComponentFixture<CeramicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorregistroComponent } from './compradorregistro.component';

describe('CompradorregistroComponent', () => {
  let component: CompradorregistroComponent;
  let fixture: ComponentFixture<CompradorregistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorregistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

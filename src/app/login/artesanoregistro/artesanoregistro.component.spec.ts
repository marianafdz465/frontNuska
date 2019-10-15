import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesanoregistroComponent } from './artesanoregistro.component';

describe('ArtesanoregistroComponent', () => {
  let component: ArtesanoregistroComponent;
  let fixture: ComponentFixture<ArtesanoregistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtesanoregistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesanoregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftmanRegisterComponent } from './craftman-register.component';

describe('CraftmanRegisterComponent', () => {
  let component: CraftmanRegisterComponent;
  let fixture: ComponentFixture<CraftmanRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftmanRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftmanRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

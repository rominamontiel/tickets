import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaSimpleComponent } from './suma-simple.component';

describe('SumaSimpleComponent', () => {
  let component: SumaSimpleComponent;
  let fixture: ComponentFixture<SumaSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

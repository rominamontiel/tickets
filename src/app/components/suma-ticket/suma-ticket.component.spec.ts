import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaTicketComponent } from './suma-ticket.component';

describe('SumaTicketComponent', () => {
  let component: SumaTicketComponent;
  let fixture: ComponentFixture<SumaTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

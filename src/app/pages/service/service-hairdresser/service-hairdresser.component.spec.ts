import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHairdresserComponent } from './service-hairdresser.component';

describe('ServiceHairdresserComponent', () => {
  let component: ServiceHairdresserComponent;
  let fixture: ComponentFixture<ServiceHairdresserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceHairdresserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceHairdresserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

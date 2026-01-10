import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRedirectComponent } from './service-redirect.component';

describe('ServiceRedirectComponent', () => {
  let component: ServiceRedirectComponent;
  let fixture: ComponentFixture<ServiceRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

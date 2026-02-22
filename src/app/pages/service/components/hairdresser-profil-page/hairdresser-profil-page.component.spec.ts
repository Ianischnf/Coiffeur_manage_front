import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairdresserProfilPageComponent } from './hairdresser-profil-page.component';

describe('HairdresserProfilPageComponent', () => {
  let component: HairdresserProfilPageComponent;
  let fixture: ComponentFixture<HairdresserProfilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairdresserProfilPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairdresserProfilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

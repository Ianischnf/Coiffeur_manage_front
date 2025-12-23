import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextereaComponent } from './texterea.component';

describe('TextereaComponent', () => {
  let component: TextereaComponent;
  let fixture: ComponentFixture<TextereaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextereaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextereaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

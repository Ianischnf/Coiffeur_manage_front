import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockLoginRegisterComponent } from './block-login-register.component';

describe('BlockLoginRegisterComponent', () => {
  let component: BlockLoginRegisterComponent;
  let fixture: ComponentFixture<BlockLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockLoginRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

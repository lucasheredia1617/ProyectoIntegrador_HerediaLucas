import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardandsoftskilssComponent } from './hardandsoftskilss.component';

describe('HardandsoftskilssComponent', () => {
  let component: HardandsoftskilssComponent;
  let fixture: ComponentFixture<HardandsoftskilssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardandsoftskilssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardandsoftskilssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WereComponent } from './were.component';

describe('WereComponent', () => {
  let component: WereComponent;
  let fixture: ComponentFixture<WereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkalComponent } from './kkal.component';

describe('KkalComponent', () => {
  let component: KkalComponent;
  let fixture: ComponentFixture<KkalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

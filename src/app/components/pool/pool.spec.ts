import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pool } from './pool';

describe('Pool', () => {
  let component: Pool;
  let fixture: ComponentFixture<Pool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

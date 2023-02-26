import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBaseComponent } from './result-base.component';

describe('ResultBaseComponent', () => {
  let component: ResultBaseComponent;
  let fixture: ComponentFixture<ResultBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ResultBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

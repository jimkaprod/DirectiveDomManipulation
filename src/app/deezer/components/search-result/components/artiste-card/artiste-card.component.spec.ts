import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteCardComponent } from './artiste-card.component';

describe('ArtisteCardComponent', () => {
  let component: ArtisteCardComponent;
  let fixture: ComponentFixture<ArtisteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ArtisteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

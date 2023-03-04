import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsVisualisationComponent } from './components-visualisation.component';

describe('ComponentsVisualisationComponent', () => {
  let component: ComponentsVisualisationComponent;
  let fixture: ComponentFixture<ComponentsVisualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentsVisualisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

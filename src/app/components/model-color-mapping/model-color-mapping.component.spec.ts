import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelColorMappingComponent } from './model-color-mapping.component';

describe('ModelColorMappingComponent', () => {
  let component: ModelColorMappingComponent;
  let fixture: ComponentFixture<ModelColorMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelColorMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelColorMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

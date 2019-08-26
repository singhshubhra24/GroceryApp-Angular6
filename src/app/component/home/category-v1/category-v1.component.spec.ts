import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryV1Component } from './category-v1.component';

describe('CategoryV1Component', () => {
  let component: CategoryV1Component;
  let fixture: ComponentFixture<CategoryV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

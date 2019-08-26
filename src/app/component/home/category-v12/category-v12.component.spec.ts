import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryV12Component } from './category-v12.component';

describe('CategoryV12Component', () => {
  let component: CategoryV12Component;
  let fixture: ComponentFixture<CategoryV12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryV12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryV12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

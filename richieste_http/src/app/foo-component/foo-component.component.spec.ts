import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooComponent } from './foo-component.component';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooComponent]
    });
    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
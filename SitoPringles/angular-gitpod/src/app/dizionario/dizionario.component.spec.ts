import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DizionarioComponent } from './dizionario.component';

describe('DizionarioComponent', () => {
  let component: DizionarioComponent;
  let fixture: ComponentFixture<DizionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DizionarioComponent]
    });
    fixture = TestBed.createComponent(DizionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

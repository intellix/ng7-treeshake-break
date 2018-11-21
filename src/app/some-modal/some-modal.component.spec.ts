import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeModalComponent } from './some-modal.component';

describe('SomeModalComponent', () => {
  let component: SomeModalComponent;
  let fixture: ComponentFixture<SomeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

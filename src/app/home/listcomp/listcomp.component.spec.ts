import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcompComponent } from './listcomp.component';

describe('ListcompComponent', () => {
  let component: ListcompComponent;
  let fixture: ComponentFixture<ListcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

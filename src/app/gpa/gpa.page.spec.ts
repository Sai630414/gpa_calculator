import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GpaPage } from './gpa.page';

describe('GpaPage', () => {
  let component: GpaPage;
  let fixture: ComponentFixture<GpaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgpaPage } from './cgpa.page';

describe('CgpaPage', () => {
  let component: CgpaPage;
  let fixture: ComponentFixture<CgpaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CgpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

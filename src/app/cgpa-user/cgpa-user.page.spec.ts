import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgpaUserPage } from './cgpa-user.page';

describe('CgpaUserPage', () => {
  let component: CgpaUserPage;
  let fixture: ComponentFixture<CgpaUserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CgpaUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

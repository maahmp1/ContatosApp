import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PepePage } from './pepe.page';

describe('PepePage', () => {
  let component: PepePage;
  let fixture: ComponentFixture<PepePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PepePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

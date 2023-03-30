import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DudaPage } from './duda.page';

describe('DudaPage', () => {
  let component: DudaPage;
  let fixture: ComponentFixture<DudaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

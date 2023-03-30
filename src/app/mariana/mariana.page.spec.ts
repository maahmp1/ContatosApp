import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarianaPage } from './mariana.page';

describe('MarianaPage', () => {
  let component: MarianaPage;
  let fixture: ComponentFixture<MarianaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarianaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

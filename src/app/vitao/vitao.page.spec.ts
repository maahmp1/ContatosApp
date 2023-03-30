import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitaoPage } from './vitao.page';

describe('VitaoPage', () => {
  let component: VitaoPage;
  let fixture: ComponentFixture<VitaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VitaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

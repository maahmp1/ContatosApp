import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarinaoPage } from './marinao.page';

describe('MarinaoPage', () => {
  let component: MarinaoPage;
  let fixture: ComponentFixture<MarinaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarinaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

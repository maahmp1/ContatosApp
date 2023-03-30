import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SasaPage } from './sasa.page';

describe('SasaPage', () => {
  let component: SasaPage;
  let fixture: ComponentFixture<SasaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

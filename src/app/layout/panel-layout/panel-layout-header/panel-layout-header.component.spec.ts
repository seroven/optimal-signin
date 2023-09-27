import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLayoutHeaderComponent } from './panel-layout-header.component';

describe('PanelLayoutHeaderComponent', () => {
  let component: PanelLayoutHeaderComponent;
  let fixture: ComponentFixture<PanelLayoutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelLayoutHeaderComponent]
    });
    fixture = TestBed.createComponent(PanelLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLayoutFooterComponent } from './panel-layout-footer.component';

describe('PanelLayoutFooterComponent', () => {
  let component: PanelLayoutFooterComponent;
  let fixture: ComponentFixture<PanelLayoutFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelLayoutFooterComponent]
    });
    fixture = TestBed.createComponent(PanelLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

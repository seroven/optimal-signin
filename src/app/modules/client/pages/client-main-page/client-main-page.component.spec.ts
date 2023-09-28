import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMainPageComponent } from './client-main-page.component';

describe('ClientMainPageComponent', () => {
  let component: ClientMainPageComponent;
  let fixture: ComponentFixture<ClientMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientMainPageComponent]
    });
    fixture = TestBed.createComponent(ClientMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

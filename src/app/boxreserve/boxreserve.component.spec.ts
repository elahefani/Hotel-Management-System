import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxreserveComponent } from './boxreserve.component';

describe('BoxreserveComponent', () => {
  let component: BoxreserveComponent;
  let fixture: ComponentFixture<BoxreserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxreserveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

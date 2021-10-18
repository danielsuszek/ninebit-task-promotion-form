import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPromotionsComponent } from './get-all-promotions.component';

describe('GetAllPromotionsComponent', () => {
  let component: GetAllPromotionsComponent;
  let fixture: ComponentFixture<GetAllPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

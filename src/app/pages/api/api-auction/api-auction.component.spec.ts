import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAuctionComponent } from './api-auction.component';

describe('ApiAuctionComponent', () => {
  let component: ApiAuctionComponent;
  let fixture: ComponentFixture<ApiAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

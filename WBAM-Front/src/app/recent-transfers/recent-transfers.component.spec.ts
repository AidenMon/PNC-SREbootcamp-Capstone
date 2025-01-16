import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransfersComponent } from './recent-transfers.component';

describe('RecentTransfersComponent', () => {
  let component: RecentTransfersComponent;
  let fixture: ComponentFixture<RecentTransfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentTransfersComponent]
    });
    fixture = TestBed.createComponent(RecentTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

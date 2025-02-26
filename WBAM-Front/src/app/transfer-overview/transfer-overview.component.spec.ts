import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOverviewComponent } from './transfer-overview.component';

describe('TransferOverviewComponent', () => {
  let component: TransferOverviewComponent;
  let fixture: ComponentFixture<TransferOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferOverviewComponent]
    });
    fixture = TestBed.createComponent(TransferOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

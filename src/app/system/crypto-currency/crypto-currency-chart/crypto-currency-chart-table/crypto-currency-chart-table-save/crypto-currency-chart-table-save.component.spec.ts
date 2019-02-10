import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyChartTableSaveComponent } from './crypto-currency-chart-table-save.component';

describe('CryptoCurrencyChartTableSaveComponent', () => {
  let component: CryptoCurrencyChartTableSaveComponent;
  let fixture: ComponentFixture<CryptoCurrencyChartTableSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCurrencyChartTableSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCurrencyChartTableSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

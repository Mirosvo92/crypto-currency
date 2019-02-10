import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-crypto-currency-chart-table-filter',
  templateUrl: './crypto-currency-chart-table-filter.component.html',
  styleUrls: ['./crypto-currency-chart-table-filter.component.scss']
})

export class CryptoCurrencyChartTableFilterComponent implements OnInit, OnChanges {
  @Output() setFilter = new EventEmitter<{value: string}>();
  @Input() activeFilter: string;
  dataFilter = [
    {text: 'Sort by date', value: 'byDate'},
    {text: 'Sort by value', value: 'byValue'},
  ];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.activeFilter) {
      this.activeFilter = changes.activeFilter.currentValue;
    }
  }

  changeSort(value: string) {
    this.setFilter.emit({value: value});
  }

}

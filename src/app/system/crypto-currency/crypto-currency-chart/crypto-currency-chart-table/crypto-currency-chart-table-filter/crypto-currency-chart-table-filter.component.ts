import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-crypto-currency-chart-table-filter',
  templateUrl: './crypto-currency-chart-table-filter.component.html',
  styleUrls: ['./crypto-currency-chart-table-filter.component.scss']
})

export class CryptoCurrencyChartTableFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<{value: string}>();
  dataFilter = [
    {text: 'sort by date', value: 'byDate'},
    {text: 'sort by value', value: 'byValue'},
  ];

  constructor() { }

  ngOnInit() {
  }

  changeSort(value: string) {
    this.filter.emit({value: value});
  }

}

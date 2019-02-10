import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-crypto-currency-chart-table-save',
  templateUrl: './crypto-currency-chart-table-save.component.html',
  styleUrls: ['./crypto-currency-chart-table-save.component.scss']
})
export class CryptoCurrencyChartTableSaveComponent implements OnInit, OnChanges {
  @Input() dataTable: Array<any[]>;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataTable) {
      this.dataTable = changes.dataTable.currentValue;
    }
  }

  download() {
    saveAs(new Blob(this.dataTable, { type: 'csv' }), 'data.csv');
  }

}

import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as moment from 'moment';
import {DataChartInterfaces} from '../../../shared/interfaces/data-chart.inretfaces';

@Component({
  selector: 'app-crypto-currency-chart-table',
  templateUrl: './crypto-currency-chart-table.component.html',
  styleUrls: ['./crypto-currency-chart-table.component.scss']
})

export class CryptoCurrencyChartTableComponent implements OnInit, OnChanges {
  @Input() defaultCurr: string[];
  @Input() dataChart: DataChartInterfaces[];
  @Input() isUpdate: boolean;
  dataTable: Array<any[]>;
  filter = 'byDate';
  cloneDataChart: DataChartInterfaces[];
  lineChartData = {
    chartType: 'LineChart',
    dataTable: [],
    options: {
      legend: {position: 'top'},
      title: 'currency - USD',
      chartArea: {width: '85%'},
      height: 900,
    }
  };

  constructor() { }

  ngOnInit() {
    this.filterDataTable({value: this.filter});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isUpdate) {
      this.filter = 'byDate';
      this.filterDataTable({value: this.filter});
    }
  }

  private setDataTableByDate() {
    this.cloneDataChart.forEach( (el, dataChartIndex) => {
      el.data.history.forEach( (data, historyIndex) => {
        if (dataChartIndex === 0) {
          data.timestamp = moment(data.timestamp).format('DD.MM.YYYY:HH:MM:SS');
          this.dataTable.push([data.timestamp, Number(data.price)]);
        } else {
          if (this.dataTable[historyIndex + 1]) {
            this.dataTable[historyIndex + 1].push(Number(data.price));
          }
        }
      });
    });
  }

  private setDataTableByValue() {
    this.cloneDataChart.forEach( (el, dataChartIndex) => {
      el.data.history.sort((a, b) => Number(a.price) - Number(b.price))
        .forEach( (data, historyIndex) => {
          if (dataChartIndex === 0) {
            this.dataTable[historyIndex + 1] = [data.price, Number(data.price)];
          } else {
            if (this.dataTable[historyIndex + 1]) {
              this.dataTable[historyIndex + 1].push(Number(data.price));
              if (this.dataTable[historyIndex + 1][0] < data.price) {
                this.dataTable[historyIndex + 1][0] = data.price;
              }
            }
          }
      });
    });
  }

  filterDataTable(data: {value: string}) {
    this.dataTable = [['title']];
    this.dataTable[0].push(...this.defaultCurr);
    this.cloneDataChart = JSON.parse(JSON.stringify(this.dataChart));
    switch (data.value) {
      case 'byValue':
        this.setDataTableByValue();
        break;
      case 'byDate':
        this.setDataTableByDate();
        break;
    }
    this.filter = data.value;
    this.validateDataTable();
    this.lineChartData.dataTable = this.dataTable;
    this.lineChartData = Object.create(this.lineChartData);
  }

  private validateDataTable() {
    const allowableLength = this.defaultCurr.length + 1;
    this.dataTable = this.dataTable.filter( el => el.length === allowableLength);
  }

}



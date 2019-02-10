import {Component, Input, OnInit} from '@angular/core';
import {CryptoCurrencyService} from '../../shared/services/crypto-currensy.service';
import {concatMap, filter} from 'rxjs/operators';
import {from} from 'rxjs';
import {DefaultCurrDataInterface} from '../../shared/interfaces/data-chart.inretfaces';

@Component({
  selector: 'app-crypto-currency-chart',
  templateUrl: './crypto-currency-chart.component.html',
  styleUrls: ['./crypto-currency-chart.component.scss']
})
export class CryptoCurrencyChartComponent implements OnInit {
  @Input() currencies: [{name: string, id: number}];
  defaultCurr = ['Bitcoin', 'Ethereum', 'Stellar'];
  defaultCurrData: DefaultCurrDataInterface[];
  dataChart = [];
  isUpdate = false;

  constructor(private cryptoCurrency: CryptoCurrencyService) {}

  ngOnInit() {
    this.getDataDefaultCurr();
    this.getDataByCurrency(this.defaultCurrData);
  }

  addNewCurrency(data: {id: number, name: string}) {
    this.defaultCurr.push(data.name);
    this.getDataByCurrency([data]);
  }

  deleteCurrency(data: {id: number, name: string}) {
    const indexDeleteEl = this.defaultCurr.indexOf(data.name);
    if (indexDeleteEl !== -1) {
      this.defaultCurr.splice(indexDeleteEl, 1);
      this.dataChart.splice(indexDeleteEl, 1);
      this.isUpdate = !this.isUpdate;
    }
  }

  private getDataDefaultCurr() {
    this.defaultCurrData = this.currencies
      .filter( el => this.defaultCurr.indexOf(el.name) !== -1);
  }

  private getDataByCurrency(data: {name: string, id: number}[]) {
    from(data)
      .pipe(concatMap(param => this.cryptoCurrency.getDataCurrency(param.id, '30d')),
        filter( value => value.status === 'success' ))
      .subscribe( response => {
        this.dataChart.push({data: response.data});
    }, error => {
        console.log('error getDataCurrency', error);
      });
  }

}

import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CryptoCurrencyService} from '../../../shared/services/crypto-currensy.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {DefaultCurrDataInterface} from '../../../shared/interfaces/data-chart.inretfaces';

@Component({
  selector: 'app-crypto-currency-list',
  templateUrl: './crypto-currency-chart-list.component.html',
  styleUrls: ['./crypto-currency-chart-list.component.scss']
})
export class CryptoCurrencyChartListComponent implements OnInit {
  @Input() currencies: {name: string, id: number}[];
  @Input() defaultCurrData: DefaultCurrDataInterface[];
  @Output() addNewCurrency = new EventEmitter<{name: string, id: number}>();
  @Output() deleteCurrency = new EventEmitter<{name: string, id: number}>();

  constructor() { }

  ngOnInit() {
    this.filterCurrency();
  }

  private filterCurrency() {
    const indexesCur = this.defaultCurrData.map( el => el.id);
    this.currencies = this.currencies.filter( (el) => indexesCur.indexOf(el.id) === -1);
  }

  addCurrency(value: string) {
    const newElement = this.currencies.filter( el => el.id === Number(value));
    this.currencies = this.currencies.filter( el => el.id !== Number(value));
    this.defaultCurrData.push(newElement[0]);
    this.addNewCurrency.emit(newElement[0]);
  }

  delCurrency(value: string) {
    const delElement = this.defaultCurrData.filter( el => el.id === Number(value));
    this.defaultCurrData.forEach( (el, i) => {
      if (el.id === Number(value)) {
        this.defaultCurrData.splice(i, 1);
      }
    });
    this.currencies.push(delElement[0]);
    this.deleteCurrency.emit(delElement[0]);
  }


}

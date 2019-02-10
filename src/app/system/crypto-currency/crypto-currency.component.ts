import { Component, OnInit } from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {CryptoCurrencyService} from '../shared/services/crypto-currensy.service';
import {Currencies} from '../shared/interfaces/data-chart.inretfaces';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements OnInit {
  currencies: Currencies[];

  constructor(private cryptoCurrency: CryptoCurrencyService) { }

  ngOnInit() {
    this.getCurrency();
  }

  private getCurrency() {
    this.cryptoCurrency.getListCurrency('coins')
      .pipe(
        filter(value => value.status === 'success'),
        map( value => value.data.coins.map(coin => {
         return  {name: coin.name, id: coin.id};
        }))
      ).subscribe( response => {
        this.currencies = response;
      }, error => {
        console.log('error getListCurrency', error);
    });
  }
}

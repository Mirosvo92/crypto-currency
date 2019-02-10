import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable()

export class CryptoCurrencyService {
  baseUrl = 'https://api.coinranking.com/v1/public/';

  constructor(public http: HttpClient) {}

  getListCurrency(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path);
  }

  getDataCurrency(coinId: number, timeFrame: string): Observable<any> {
    return this.http.get(this.baseUrl + `coin/${coinId}/history/${timeFrame}`);
  }

}

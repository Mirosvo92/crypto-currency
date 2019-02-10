import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';


import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {CryptoCurrencyChatListComponent} from './crypto-currency/crypto-currency-chart/crypto-currency-chat-list/crypto-currency-chat-list.component';
import {CryptoCurrencyComponent} from './crypto-currency/crypto-currency.component';
import {HttpClientModule} from '@angular/common/http';
import {CryptoCurrencyService} from './shared/services/crypto-currensy.service';
import {CryptoCurrencyChartComponent } from './crypto-currency/crypto-currency-chart/crypto-currency-chart.component';
import {CryptoCurrencyChartTableComponent} from './crypto-currency/crypto-currency-chart/crypto-currency-chart-table/crypto-currency-chart-table.component';
import {CryptoCurrencyChartTableFilterComponent} from './crypto-currency/crypto-currency-chart/crypto-currency-chart-table/crypto-currency-chart-table-filter/crypto-currency-chart-table-filter.component';
import {DisabledButtonDirective} from './shared/directives/disabled-button.directive';
import { CryptoCurrencyChartTableSaveComponent } from './crypto-currency/crypto-currency-chart/crypto-currency-chart-table/crypto-currency-chart-table-save/crypto-currency-chart-table-save.component';


@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  declarations: [
    SystemComponent,
    CryptoCurrencyComponent,
    CryptoCurrencyChatListComponent,
    CryptoCurrencyChartComponent,
    CryptoCurrencyChartTableComponent,
    CryptoCurrencyChartTableFilterComponent,
    DisabledButtonDirective,
    CryptoCurrencyChartTableSaveComponent
  ],
  providers: [CryptoCurrencyService]
})
export class SystemModule {}

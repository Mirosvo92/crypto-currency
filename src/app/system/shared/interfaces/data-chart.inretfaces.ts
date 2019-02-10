export interface DataChartInterfaces {
  data: {
    change: string;
    history: {price: string, timestamp: number | string}[];
  };
}

export interface DefaultCurrDataInterface {
  name: string;
  id: number;
}

export interface Currencies {
  name: string;
  id: number;
}

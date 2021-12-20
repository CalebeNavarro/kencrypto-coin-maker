import axios, { AxiosInstance } from 'axios';
import { CoinMarketTypes, CoinMarketConversion, CoinMarketError } from '../types/coinMarket';

export class CoinMarket {
  baseUrl: string = 'https://pro-api.coinmarketcap.com/v1/';
  axiosInstance: AxiosInstance;

  constructor(api: string) {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'X-CMC_PRO_API_KEY': api,
        Accept: 'application/json',
      },
      params: {}
    });
  }

  async conversion(symbol: string, amount: number, convert: Array<string>) {
    let response: any;

    try {
      this.axiosInstance.defaults.params['symbol'] = symbol;
      this.axiosInstance.defaults.params['amount'] = amount;
      this.axiosInstance.defaults.params['convert'] = convert.join(',');
      response = await this.axiosInstance.get('/tools/price-conversion');

    } catch (error) {
      if(axios.isAxiosError(error)){
        return error.response?.data as CoinMarketError
      }
    }

    return response.data as CoinMarketConversion;
  }

  async quotes(arr: Array<string>): Promise<CoinMarketError | CoinMarketTypes>{
    let response: any;

    try{
      this.axiosInstance.defaults.params['symbol'] = arr.join(',');
      response = await this.axiosInstance.get('/cryptocurrency/quotes/latest');
      
    } catch(error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data as CoinMarketError;
      }
    }
    
    return response.data as CoinMarketTypes;
  }
}

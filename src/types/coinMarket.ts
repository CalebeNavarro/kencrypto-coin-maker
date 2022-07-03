export interface Quote {
  [key: string]: {
    price: number;
    last_updated: Date;
  }
}

export interface Status {
  timestamp: string;
  error_code: number;
  error_message?: string;
  elapsed: number;
  credit_count: number;
  notice?: any;
}

export interface Coin {
  id: number | string;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  tags: Array<string>;
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  is_active: number;
  platform?: any;
  cmc_rank: number;
  is_fiat: number;
  date_added: string;
  last_updated: string;
  quote: Quote;
}

export interface CoinMarketTypes {
  data: {[key: string]: Coin};
  status: Status;
}

export interface CoinMarketError {
  status: {
    timestamp: string,
    error_code: number,
    error_message: string,
    elapsed: number,
    credit_count: number,
    notice?: any
  }
  data: any
}

export function isCoinMarketError(error: any): error is CoinMarketError {
  return (error as CoinMarketError).status.error_code !== 0;
}


export interface CoinMarketConversion {
  data: Data,
  status: Status
}

export interface Data {
  id: number,
  symbol: string,
  name: string,
  amount: number,
  last_updated: string,
  quote: Quote;
}
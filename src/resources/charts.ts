// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ChartsAPI from './charts';

export class Charts extends APIResource {
  /**
   * Retrieve OHLC & Volume of daily candle for desired instrument. The data for any
   * scrip is available back upto the date of its inception.
   */
  historical(params: ChartHistoricalParams, options?: Core.RequestOptions): Core.APIPromise<Chart> {
    const { 'access-token': accessToken, ...body } = params;
    return this._client.post('/charts/historical', {
      body,
      ...options,
      headers: { 'access-token': accessToken, ...options?.headers },
    });
  }

  /**
   * Retrieve OHLC & Volume of minute candle for desired instrument for current day.
   * This data available for all segments including futures & options.
   */
  intraday(params: ChartIntradayParams, options?: Core.RequestOptions): Core.APIPromise<Chart> {
    const { 'access-token': accessToken, ...body } = params;
    return this._client.post('/charts/intraday', {
      body,
      ...options,
      headers: { 'access-token': accessToken, ...options?.headers },
    });
  }
}

export interface Chart {
  /**
   * Array of values represting OHLC close value
   */
  close?: Array<number>;

  /**
   * Array of values represting OHLC high value
   */
  high?: Array<number>;

  /**
   * Array of values represting OHLC low value
   */
  low?: Array<number>;

  /**
   * Array of values represting OHLC open value
   */
  open?: Array<number>;

  /**
   * Array of values represting date times in seconds since January 01, 1980
   */
  timestamp?: Array<number>;

  /**
   * Array of values represting volume
   */
  volume?: Array<number>;
}

export interface ChartHistoricalParams {
  /**
   * Header param:
   */
  'access-token': string;

  /**
   * | Body param:  | **Enums** | **Exchange**      | **Segment** |
   * | ------------ | --------- | ----------------- | ----------- |
   * | NSE_EQ       | NSE       | Equity Cash       |
   * | NSE_FNO      | NSE       | Futures & Options |
   * | NSE_CURRENCY | NSE       | Currency          |
   * | BSE_EQ       | BSE       | Equity Cash       |
   * | BSE_FNO      | BSE       | Futures & Options |
   * | BSE_CURRENCY | BSE       | Currency          |
   * | MCX_COMM     | MCX       | Commodity         |
   * | IDX_I        | INDEX     | Indices           |
   */
  exchangeSegment?:
    | 'NSE_EQ'
    | 'NSE_FNO'
    | 'NSE_CURRENCY'
    | 'BSE_EQ'
    | 'BSE_FNO'
    | 'BSE_CURRENCY'
    | 'MCX_COMM'
    | 'IDX_I';

  /**
   * Body param: Represents the expiry code value, refer charts annexure for possible
   * values.
   */
  expiryCode?: number;

  /**
   * Body param: Chart data request start date in format YYYY-MM-DD
   */
  fromDate?: string;

  /**
   * Body param: Represents the security instrument type, refer charts annexure for
   * possible values.
   */
  instrument?:
    | 'INDEX'
    | 'FUTIDX'
    | 'OPTIDX'
    | 'EQUITY'
    | 'FUTSTK'
    | 'OPTSTK'
    | 'FUTCOM'
    | 'OPTFUT'
    | 'FUTCUR'
    | 'OPTCUR';

  /**
   * Body param: Exchange standard identification for each scrip
   */
  securityId?: string;

  /**
   * Body param: Chart data request end date in format YYYY-MM-DD
   */
  toDate?: string;
}

export interface ChartIntradayParams {
  /**
   * Header param:
   */
  'access-token': string;

  /**
   * | Body param:  | **Enums** | **Exchange**      | **Segment** |
   * | ------------ | --------- | ----------------- | ----------- |
   * | NSE_EQ       | NSE       | Equity Cash       |
   * | NSE_FNO      | NSE       | Futures & Options |
   * | NSE_CURRENCY | NSE       | Currency          |
   * | BSE_EQ       | BSE       | Equity Cash       |
   * | BSE_FNO      | BSE       | Futures & Options |
   * | BSE_CURRENCY | BSE       | Currency          |
   * | MCX_COMM     | MCX       | Commodity         |
   * | IDX_I        | INDEX     | Indices           |
   */
  exchangeSegment?:
    | 'NSE_EQ'
    | 'NSE_FNO'
    | 'NSE_CURRENCY'
    | 'BSE_EQ'
    | 'BSE_FNO'
    | 'BSE_CURRENCY'
    | 'MCX_COMM'
    | 'IDX_I';

  /**
   * Body param: date format : yyyy-MM-dd
   */
  fromDate?: string;

  /**
   * Body param: Represents the security instrument type, refer charts annexure for
   * possible values.
   */
  instrument?:
    | 'INDEX'
    | 'FUTIDX'
    | 'OPTIDX'
    | 'EQUITY'
    | 'FUTSTK'
    | 'OPTSTK'
    | 'FUTCOM'
    | 'OPTFUT'
    | 'FUTCUR'
    | 'OPTCUR';

  /**
   * Body param: Represents time interval in minute, refer charts annexure for
   * possible values.
   */
  interval?: '1' | '5' | '15' | '25' | '60';

  /**
   * Body param: Exchange standard identification for each scrip
   */
  securityId?: string;

  /**
   * Body param: date format : yyyy-MM-dd
   */
  toDate?: string;
}

export namespace Charts {
  export import Chart = ChartsAPI.Chart;
  export import ChartHistoricalParams = ChartsAPI.ChartHistoricalParams;
  export import ChartIntradayParams = ChartsAPI.ChartIntradayParams;
}

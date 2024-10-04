// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as HoldingsAPI from './holdings';

export class Holdings extends APIResource {
  /**
   * Users can retrieve all holdings bought/sold in previous trading sessions. All T1
   * and delivered quantities can be fetched.
   */
  list(params: HoldingListParams, options?: Core.RequestOptions): Core.APIPromise<HoldingListResponse> {
    const { 'access-token': accessToken } = params;
    return this._client.get('/holdings', {
      ...options,
      headers: { 'access-token': accessToken, ...options?.headers },
    });
  }
}

export interface Holding {
  /**
   * Quantities available for transactions
   */
  availableQty?: number;

  /**
   * Average Buy Price of total quantities
   */
  avgCostPrice?: number;

  /**
   * Quantities placed as collateral with broker
   */
  collateralQty?: number;

  /**
   * Quantities present in depository
   */
  dpQty?: number;

  /**
   * Enum values is either NSE or BSE
   */
  exchange?: 'NSE' | 'BSE' | 'MCX' | 'ALL';

  /**
   * International Securities Identification Number
   */
  isin?: string;

  /**
   * Exchange standard identification for each scrip
   */
  securityId?: string;

  /**
   * Quantities not delivered to depository
   */
  t1Qty?: number;

  /**
   * Total number of shares in holding for given stock
   */
  totalQty?: number;

  /**
   * Exchange standard trading symbol
   */
  tradingSymbol?: string;
}

export type HoldingListResponse = Array<Holding>;

export interface HoldingListParams {
  'access-token': string;
}

export namespace Holdings {
  export import Holding = HoldingsAPI.Holding;
  export import HoldingListResponse = HoldingsAPI.HoldingListResponse;
  export import HoldingListParams = HoldingsAPI.HoldingListParams;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EdisAPI from './edis';
import * as TpinAPI from './tpin';

export class Edis extends APIResource {
  tpin: TpinAPI.Tpin = new TpinAPI.Tpin(this._client);

  /**
   * Retrieve escaped html form of CDSL and enter T-PIN to mark the stock for EDIS
   * approval. Partner has to render this form at their end to unescape.
   */
  bulkform(params: EdiBulkformParams, options?: Core.RequestOptions): Core.APIPromise<EdisForm> {
    const { 'access-token': accessToken, ...body } = params;
    return this._client.post('/edis/bulkform', {
      body,
      ...options,
      headers: { 'access-token': accessToken, ...options?.headers },
    });
  }

  /**
   * Retrieve escaped html form of CDSL and enter T-PIN to mark the stock for EDIS
   * approval. Partner has to render this form at their end to unescape.
   */
  form(params: EdiFormParams, options?: Core.RequestOptions): Core.APIPromise<EdisForm> {
    const { 'access-token': accessToken, ...body } = params;
    return this._client.post('/edis/form', {
      body,
      ...options,
      headers: { 'access-token': accessToken, ...options?.headers },
    });
  }

  /**
   * The api allows user to check the edis status of the securities. User have to
   * enter isin of the stock. An international securities identification number
   * (ISIN) is a 12-digit alphanumeric code that uniquely identifies a specific
   * security. You can get ISIN of portfolio stocks, in response of holdings api.Or
   * use ALL as a special case to query all holdings' edis auth status
   */
  inquire(
    isin: string,
    params: EdiInquireParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EdisQtyStatus> {
    const { 'access-token': accessToken } = params;
    return this._client.get(`/edis/inquire/${isin}`, {
      ...options,
      headers: { 'access-token': accessToken, ...options?.headers },
    });
  }
}

export interface EdisForm {
  dhanClientId?: string;

  edisFormHtml?: string;
}

export interface EdisQtyStatus {
  aprvdQty?: string;

  clientId?: string;

  isin?: string;

  remarks?: string;

  status?: string;

  totalQty?: string;
}

export interface EdiBulkformParams {
  /**
   * Body param:
   */
  exchange: 'NSE' | 'BSE' | 'MCX' | 'ALL';

  /**
   * Body param:
   */
  isin: Array<string>;

  /**
   * Body param:
   */
  segment: 'EQ' | 'COMM' | 'FNO' | 'CURR';

  /**
   * Header param:
   */
  'access-token': string;
}

export interface EdiFormParams {
  /**
   * Body param:
   */
  bulk: boolean;

  /**
   * Body param:
   */
  exchange: 'NSE' | 'BSE' | 'MCX' | 'ALL';

  /**
   * Body param:
   */
  isin: string;

  /**
   * Body param:
   */
  qty: number;

  /**
   * Body param:
   */
  segment: 'EQ' | 'COMM' | 'FNO' | 'CURR';

  /**
   * Header param:
   */
  'access-token': string;
}

export interface EdiInquireParams {
  'access-token': string;
}

export namespace Edis {
  export import EdisForm = EdisAPI.EdisForm;
  export import EdisQtyStatus = EdisAPI.EdisQtyStatus;
  export import EdiBulkformParams = EdisAPI.EdiBulkformParams;
  export import EdiFormParams = EdisAPI.EdiFormParams;
  export import EdiInquireParams = EdisAPI.EdiInquireParams;
  export import Tpin = TpinAPI.Tpin;
  export import TpinRetrieveParams = TpinAPI.TpinRetrieveParams;
}

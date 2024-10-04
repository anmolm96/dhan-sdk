// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TpinAPI from './tpin';

export class Tpin extends APIResource {
  /**
   * Get T-pin on registered mobile number using this API.
   */
  retrieve(params: TpinRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'access-token': accessToken } = params;
    return this._client.get('/edis/tpin', {
      ...options,
      headers: { Accept: '*/*', 'access-token': accessToken, ...options?.headers },
    });
  }
}

export interface TpinRetrieveParams {
  'access-token': string;
}

export namespace Tpin {
  export import TpinRetrieveParams = TpinAPI.TpinRetrieveParams;
}

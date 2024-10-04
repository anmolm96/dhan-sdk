// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ExternalAPI from './external';
import * as Shared from '../shared';

export class External extends APIResource {
  /**
   * The api allows you to retrieve the details of an order placed during the day,
   * with its most recent status, using a correlation id provided by the API consumer
   * at the time of order placement. This feature is available in case the user has
   * missed the order id for any reason.
   */
  retrieve(
    correlationId: string,
    params: ExternalRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Order> {
    const { 'access-token': accessToken } = params;
    return this._client.get(`/orders/external/${correlationId}`, {
      ...options,
      headers: { 'access-token': accessToken, ...options?.headers },
    });
  }
}

export interface ExternalRetrieveParams {
  'access-token': string;
}

export namespace External {
  export import ExternalRetrieveParams = ExternalAPI.ExternalRetrieveParams;
}

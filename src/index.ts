// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['DHAN_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Dhan SDK API.
 */
export class DhanSDK extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Dhan SDK API.
   *
   * @param {string} [opts.baseURL=process.env['DHAN_SDK_BASE_URL'] ?? https://api.dhan.co/v2] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('DHAN_SDK_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `https://api.dhan.co/v2`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  orders: API.Orders = new API.Orders(this);
  trades: API.Trades = new API.Trades(this);
  foreverOrders: API.ForeverOrders = new API.ForeverOrders(this);
  positions: API.Positions = new API.Positions(this);
  holdings: API.Holdings = new API.Holdings(this);
  edis: API.Edis = new API.Edis(this);
  killswitch: API.KillswitchResource = new API.KillswitchResource(this);
  margincalculator: API.Margincalculator = new API.Margincalculator(this);
  funds: API.Funds = new API.Funds(this);
  statements: API.Statements = new API.Statements(this);
  charts: API.Charts = new API.Charts(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static DhanSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static DhanSDKError = Errors.DhanSDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  DhanSDKError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace DhanSDK {
  export import RequestOptions = Core.RequestOptions;

  export import Orders = API.Orders;
  export import OrderStatus = API.OrderStatus;
  export import OrderListResponse = API.OrderListResponse;
  export import OrderSlicingResponse = API.OrderSlicingResponse;
  export import OrderCreateParams = API.OrderCreateParams;
  export import OrderRetrieveParams = API.OrderRetrieveParams;
  export import OrderUpdateParams = API.OrderUpdateParams;
  export import OrderListParams = API.OrderListParams;
  export import OrderDeleteParams = API.OrderDeleteParams;
  export import OrderSlicingParams = API.OrderSlicingParams;

  export import Trades = API.Trades;
  export import Trade = API.Trade;
  export import TradeRetrieveResponse = API.TradeRetrieveResponse;
  export import TradeListResponse = API.TradeListResponse;
  export import TradeRetrieveParams = API.TradeRetrieveParams;
  export import TradeListParams = API.TradeListParams;

  export import ForeverOrders = API.ForeverOrders;
  export import GttOrder = API.GttOrder;
  export import GttOrderStatus = API.GttOrderStatus;
  export import ForeverOrderListResponse = API.ForeverOrderListResponse;
  export import ForeverOrderCreateParams = API.ForeverOrderCreateParams;
  export import ForeverOrderUpdateParams = API.ForeverOrderUpdateParams;
  export import ForeverOrderListParams = API.ForeverOrderListParams;
  export import ForeverOrderDeleteParams = API.ForeverOrderDeleteParams;

  export import Positions = API.Positions;
  export import Position = API.Position;
  export import PositionListResponse = API.PositionListResponse;
  export import PositionListParams = API.PositionListParams;
  export import PositionConvertParams = API.PositionConvertParams;

  export import Holdings = API.Holdings;
  export import Holding = API.Holding;
  export import HoldingListResponse = API.HoldingListResponse;
  export import HoldingListParams = API.HoldingListParams;

  export import Edis = API.Edis;
  export import EdisForm = API.EdisForm;
  export import EdisQtyStatus = API.EdisQtyStatus;
  export import EdiBulkformParams = API.EdiBulkformParams;
  export import EdiFormParams = API.EdiFormParams;
  export import EdiInquireParams = API.EdiInquireParams;

  export import KillswitchResource = API.KillswitchResource;
  export import Killswitch = API.Killswitch;
  export import KillswitchControlParams = API.KillswitchControlParams;

  export import Margincalculator = API.Margincalculator;
  export import KnowYourMargin = API.KnowYourMargin;
  export import MargincalculatorCalculateParams = API.MargincalculatorCalculateParams;

  export import Funds = API.Funds;
  export import FundLimit = API.FundLimit;
  export import FundLimitParams = API.FundLimitParams;

  export import Statements = API.Statements;
  export import Ledger = API.Ledger;
  export import StatementLedgerParams = API.StatementLedgerParams;

  export import Charts = API.Charts;
  export import Chart = API.Chart;
  export import ChartHistoricalParams = API.ChartHistoricalParams;
  export import ChartIntradayParams = API.ChartIntradayParams;

  export import Order = API.Order;
}

export default DhanSDK;

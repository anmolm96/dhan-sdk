// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DhanSDK from 'dhan-sdk';
import { Response } from 'node-fetch';

const client = new DhanSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource charts', () => {
  test('historical: only required params', async () => {
    const responsePromise = client.charts.historical({ 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('historical: required and optional params', async () => {
    const response = await client.charts.historical({
      'access-token': 'access-token',
      exchangeSegment: 'NSE_EQ',
      expiryCode: 0,
      fromDate: '2019-12-27',
      instrument: 'INDEX',
      securityId: 'securityId',
      toDate: '2019-12-27',
    });
  });

  test('intraday: only required params', async () => {
    const responsePromise = client.charts.intraday({ 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('intraday: required and optional params', async () => {
    const response = await client.charts.intraday({
      'access-token': 'access-token',
      exchangeSegment: 'NSE_EQ',
      fromDate: 'fromDate',
      instrument: 'INDEX',
      interval: '1',
      securityId: 'securityId',
      toDate: 'toDate',
    });
  });
});

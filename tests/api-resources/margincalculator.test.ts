// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DhanSDK from 'dhan-sdk';
import { Response } from 'node-fetch';

const client = new DhanSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource margincalculator', () => {
  test('calculate: only required params', async () => {
    const responsePromise = client.margincalculator.calculate({
      exchangeSegment: 'NSE_EQ',
      transactionType: 'BUY',
      'access-token': 'access-token',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('calculate: required and optional params', async () => {
    const response = await client.margincalculator.calculate({
      exchangeSegment: 'NSE_EQ',
      transactionType: 'BUY',
      'access-token': 'access-token',
      dhanClientId: 'dhanClientId',
      price: 0,
      productType: 'CNC',
      quantity: 0,
      securityId: 'securityId',
      triggerPrice: 0,
    });
  });
});

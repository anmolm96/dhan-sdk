// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DhanSDK from 'dhan-sdk';
import { Response } from 'node-fetch';

const client = new DhanSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource edis', () => {
  test('bulkform: only required params', async () => {
    const responsePromise = client.edis.bulkform({
      exchange: 'NSE',
      isin: ['string', 'string', 'string'],
      segment: 'EQ',
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

  test('bulkform: required and optional params', async () => {
    const response = await client.edis.bulkform({
      exchange: 'NSE',
      isin: ['string', 'string', 'string'],
      segment: 'EQ',
      'access-token': 'access-token',
    });
  });

  test('form: only required params', async () => {
    const responsePromise = client.edis.form({
      bulk: true,
      exchange: 'NSE',
      isin: 'isin',
      qty: 1,
      segment: 'EQ',
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

  test('form: required and optional params', async () => {
    const response = await client.edis.form({
      bulk: true,
      exchange: 'NSE',
      isin: 'isin',
      qty: 1,
      segment: 'EQ',
      'access-token': 'access-token',
    });
  });

  test('inquire: only required params', async () => {
    const responsePromise = client.edis.inquire('isin', { 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('inquire: required and optional params', async () => {
    const response = await client.edis.inquire('isin', { 'access-token': 'access-token' });
  });
});

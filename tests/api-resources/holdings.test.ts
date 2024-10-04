// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DhanSDK from 'dhan-sdk';
import { Response } from 'node-fetch';

const client = new DhanSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource holdings', () => {
  test('list: only required params', async () => {
    const responsePromise = client.holdings.list({ 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.holdings.list({ 'access-token': 'access-token' });
  });
});

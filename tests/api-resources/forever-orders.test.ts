// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DhanSDK from 'dhan-sdk';
import { Response } from 'node-fetch';

const client = new DhanSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource foreverOrders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.foreverOrders.create({
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

  test('create: required and optional params', async () => {
    const response = await client.foreverOrders.create({
      transactionType: 'BUY',
      'access-token': 'access-token',
      correlationId: 'correlationId',
      dhanClientId: 'dhanClientId',
      disclosedQuantity: 0,
      exchangeSegment: 'NSE_EQ',
      orderFlag: 'SINGLE',
      orderType: 'LIMIT',
      price: 0,
      price1: 0,
      productType: 'CNC',
      quantity: 0,
      quantity1: 0,
      securityId: 'securityId',
      triggerPrice: 0,
      triggerPrice1: 0,
      validity: 'validity',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.foreverOrders.update('order-id', { 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.foreverOrders.update('order-id', {
      'access-token': 'access-token',
      dhanClientId: 'dhanClientId',
      disclosedQuantity: 0,
      legName: 'TARGET_LEG',
      orderFlag: 'SINGLE',
      orderId: 'orderId',
      orderType: 'LIMIT',
      price: 0,
      quantity: 0,
      triggerPrice: 0,
      validity: 'validity',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.foreverOrders.list({ 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.foreverOrders.list({ 'access-token': 'access-token' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.foreverOrders.delete('order-id', { 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.foreverOrders.delete('order-id', { 'access-token': 'access-token' });
  });
});

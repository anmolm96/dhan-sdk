// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DhanSDK from 'dhan-sdk';
import { Response } from 'node-fetch';

const client = new DhanSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource orders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.orders.create({
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

  test('create: required and optional params', async () => {
    const response = await client.orders.create({
      exchangeSegment: 'NSE_EQ',
      transactionType: 'BUY',
      'access-token': 'access-token',
      afterMarketOrder: true,
      amoTime: 'OPEN',
      boProfitValue: 0,
      boStopLossValue: 0,
      correlationId: 'correlationId',
      dhanClientId: 'dhanClientId',
      disclosedQuantity: 0,
      orderType: 'LIMIT',
      price: 0,
      productType: 'CNC',
      quantity: 0,
      securityId: 'securityId',
      triggerPrice: 0,
      validity: 'DAY',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.orders.retrieve('order-id', { 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.orders.retrieve('order-id', { 'access-token': 'access-token' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.orders.update('order-id', { 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.orders.update('order-id', {
      'access-token': 'access-token',
      dhanClientId: 'dhanClientId',
      disclosedQuantity: 0,
      legName: 'ENTRY_LEG',
      orderId: 'orderId',
      orderType: 'LIMIT',
      price: 0,
      quantity: 0,
      triggerPrice: 0,
      validity: 'DAY',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.orders.list({ 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.orders.list({ 'access-token': 'access-token' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.orders.delete('order-id', { 'access-token': 'access-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.orders.delete('order-id', { 'access-token': 'access-token' });
  });

  test('slicing: only required params', async () => {
    const responsePromise = client.orders.slicing({
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

  test('slicing: required and optional params', async () => {
    const response = await client.orders.slicing({
      exchangeSegment: 'NSE_EQ',
      transactionType: 'BUY',
      'access-token': 'access-token',
      afterMarketOrder: true,
      amoTime: 'OPEN',
      boProfitValue: 0,
      boStopLossValue: 0,
      correlationId: 'correlationId',
      dhanClientId: 'dhanClientId',
      disclosedQuantity: 0,
      orderType: 'LIMIT',
      price: 0,
      productType: 'CNC',
      quantity: 0,
      securityId: 'securityId',
      triggerPrice: 0,
      validity: 'DAY',
    });
  });
});

#!/usr/bin/env -S yarn tsn

import DhanSDK from 'dhan-sdk';

const client = new DhanSDK();

async function main() {
  const orderStatus = await client.orders.create({
    exchangeSegment: 'NSE_EQ',
    transactionType: 'BUY',
    'access-token': 'access-token',
  });

  console.log(orderStatus.orderId);
}

main();

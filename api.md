# Shared

Types:

- <code><a href="./src/resources/shared.ts">Order</a></code>

# Orders

Types:

- <code><a href="./src/resources/orders/orders.ts">OrderStatus</a></code>
- <code><a href="./src/resources/orders/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/orders/orders.ts">OrderSlicingResponse</a></code>

Methods:

- <code title="post /orders">client.orders.<a href="./src/resources/orders/orders.ts">create</a>({ ...params }) -> OrderStatus</code>
- <code title="get /orders/{order-id}">client.orders.<a href="./src/resources/orders/orders.ts">retrieve</a>(orderId, { ...params }) -> Order</code>
- <code title="put /orders/{order-id}">client.orders.<a href="./src/resources/orders/orders.ts">update</a>(orderId, { ...params }) -> OrderStatus</code>
- <code title="get /orders">client.orders.<a href="./src/resources/orders/orders.ts">list</a>({ ...params }) -> OrderListResponse</code>
- <code title="delete /orders/{order-id}">client.orders.<a href="./src/resources/orders/orders.ts">delete</a>(orderId, { ...params }) -> OrderStatus</code>
- <code title="post /orders/slicing">client.orders.<a href="./src/resources/orders/orders.ts">slicing</a>({ ...params }) -> OrderSlicingResponse</code>

## External

Methods:

- <code title="get /orders/external/{correlation-id}">client.orders.external.<a href="./src/resources/orders/external.ts">retrieve</a>(correlationId, { ...params }) -> Order</code>

# Trades

Types:

- <code><a href="./src/resources/trades/trades.ts">Trade</a></code>
- <code><a href="./src/resources/trades/trades.ts">TradeRetrieveResponse</a></code>
- <code><a href="./src/resources/trades/trades.ts">TradeListResponse</a></code>

Methods:

- <code title="get /trades/{order-id}">client.trades.<a href="./src/resources/trades/trades.ts">retrieve</a>(orderId, { ...params }) -> TradeRetrieveResponse</code>
- <code title="get /trades">client.trades.<a href="./src/resources/trades/trades.ts">list</a>({ ...params }) -> TradeListResponse</code>

## History

Types:

- <code><a href="./src/resources/trades/history.ts">TradeHistory</a></code>
- <code><a href="./src/resources/trades/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /trades/{from-date}/{to-date}/{page-number}">client.trades.history.<a href="./src/resources/trades/history.ts">list</a>(fromDate, toDate, pageNumber, { ...params }) -> HistoryListResponse</code>

# ForeverOrders

Types:

- <code><a href="./src/resources/forever-orders.ts">GttOrder</a></code>
- <code><a href="./src/resources/forever-orders.ts">GttOrderStatus</a></code>
- <code><a href="./src/resources/forever-orders.ts">ForeverOrderListResponse</a></code>

Methods:

- <code title="post /forever/orders">client.foreverOrders.<a href="./src/resources/forever-orders.ts">create</a>({ ...params }) -> GttOrderStatus</code>
- <code title="put /forever/orders/{order-id}">client.foreverOrders.<a href="./src/resources/forever-orders.ts">update</a>(orderId, { ...params }) -> GttOrderStatus</code>
- <code title="get /forever/orders">client.foreverOrders.<a href="./src/resources/forever-orders.ts">list</a>({ ...params }) -> ForeverOrderListResponse</code>
- <code title="delete /forever/orders/{order-id}">client.foreverOrders.<a href="./src/resources/forever-orders.ts">delete</a>(orderId, { ...params }) -> GttOrderStatus</code>

# Positions

Types:

- <code><a href="./src/resources/positions.ts">Position</a></code>
- <code><a href="./src/resources/positions.ts">PositionListResponse</a></code>

Methods:

- <code title="get /positions">client.positions.<a href="./src/resources/positions.ts">list</a>({ ...params }) -> PositionListResponse</code>
- <code title="post /positions/convert">client.positions.<a href="./src/resources/positions.ts">convert</a>({ ...params }) -> void</code>

# Holdings

Types:

- <code><a href="./src/resources/holdings.ts">Holding</a></code>
- <code><a href="./src/resources/holdings.ts">HoldingListResponse</a></code>

Methods:

- <code title="get /holdings">client.holdings.<a href="./src/resources/holdings.ts">list</a>({ ...params }) -> HoldingListResponse</code>

# Edis

Types:

- <code><a href="./src/resources/edis/edis.ts">EdisForm</a></code>
- <code><a href="./src/resources/edis/edis.ts">EdisQtyStatus</a></code>

Methods:

- <code title="post /edis/bulkform">client.edis.<a href="./src/resources/edis/edis.ts">bulkform</a>({ ...params }) -> EdisForm</code>
- <code title="post /edis/form">client.edis.<a href="./src/resources/edis/edis.ts">form</a>({ ...params }) -> EdisForm</code>
- <code title="get /edis/inquire/{isin}">client.edis.<a href="./src/resources/edis/edis.ts">inquire</a>(isin, { ...params }) -> EdisQtyStatus</code>

## Tpin

Methods:

- <code title="get /edis/tpin">client.edis.tpin.<a href="./src/resources/edis/tpin.ts">retrieve</a>({ ...params }) -> void</code>

# Killswitch

Types:

- <code><a href="./src/resources/killswitch.ts">Killswitch</a></code>

Methods:

- <code title="post /killswitch">client.killswitch.<a href="./src/resources/killswitch.ts">control</a>({ ...params }) -> Killswitch</code>

# Margincalculator

Types:

- <code><a href="./src/resources/margincalculator.ts">KnowYourMargin</a></code>

Methods:

- <code title="post /margincalculator">client.margincalculator.<a href="./src/resources/margincalculator.ts">calculate</a>({ ...params }) -> KnowYourMargin</code>

# Funds

Types:

- <code><a href="./src/resources/funds.ts">FundLimit</a></code>

Methods:

- <code title="get /fundlimit">client.funds.<a href="./src/resources/funds.ts">limit</a>({ ...params }) -> FundLimit</code>

# Statements

Types:

- <code><a href="./src/resources/statements.ts">Ledger</a></code>

Methods:

- <code title="get /ledger">client.statements.<a href="./src/resources/statements.ts">ledger</a>({ ...params }) -> Ledger</code>

# Charts

Types:

- <code><a href="./src/resources/charts.ts">Chart</a></code>

Methods:

- <code title="post /charts/historical">client.charts.<a href="./src/resources/charts.ts">historical</a>({ ...params }) -> Chart</code>
- <code title="post /charts/intraday">client.charts.<a href="./src/resources/charts.ts">intraday</a>({ ...params }) -> Chart</code>

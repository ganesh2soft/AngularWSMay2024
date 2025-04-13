export class NiftyOHLCData {
  timestamp: string;
  last_price: number;
  ohlc: {
    open: number;
    high: number;
    low: number;
    close: number;
  };

  // Constructor to initialize the properties
  constructor(
    timestamp: string,
    last_price: number,
    open: number,
    high: number,
    low: number,
    close: number
  ) {
    this.timestamp = timestamp;
    this.last_price = last_price;
    this.ohlc = {
      open: open,
      high: high,
      low: low,
      close: close,
    };
  }
}

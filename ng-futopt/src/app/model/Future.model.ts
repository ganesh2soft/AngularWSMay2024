export class Future {
    ts: string;
    last_price: number;
    symbol: string;
    oi: number;
    total_buy_quantity: number;
    total_sell_quantity: number;
    volume: number;
    result: string;
  
    constructor(
      ts: string,
      last_price: number,
      symbol: string,
      oi: number,
      total_buy_quantity: number,
      total_sell_quantity: number,
      volume: number,
      result: string
    ) {
      this.ts = ts;
      this.last_price = last_price;
      this.symbol = symbol;
      this.oi = oi;
      this.total_buy_quantity = total_buy_quantity;
      this.total_sell_quantity = total_sell_quantity;
      this.volume = volume;
      this.result = result;
    }
  }
  
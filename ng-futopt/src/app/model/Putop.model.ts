export class Putop  {
    date_entry: string;
    expiry_date: string;
    put_ltp: number;
    put_volume: number;
    put_writer_oi: number;
    put_wri_oi_prev: number;
    strike_price: number;

    constructor(
        date_entry: string,
        expiry_date: string,
        put_ltp: number,
        put_volume: number,
        put_writer_oi: number,
        put_wri_oi_prev: number,
        strike_price: number
    ) {
        this.date_entry = date_entry;
        this.expiry_date = expiry_date;
        this.put_ltp = put_ltp;
        this.put_volume = put_volume;
        this.put_writer_oi = put_writer_oi;
        this.put_wri_oi_prev = put_wri_oi_prev;
        this.strike_price = strike_price;
    }
}

export class Callop {
    date_entry: string;
    expiry_date: string;
    call_ltp: string;
    call_volume: number;
    call_writer_oi: number;
    call_wri_oi_prev: number;
    strike_price: number;
    nifty_spot_price: number

    constructor(
        date_entry: string,
        expiry_date: string,
        call_ltp: string,
        call_volume: number,
        call_writer_oi: number,
        call_wri_oi_prev: number,
        strike_price: number,
        nifty_spot_price: number
    ) {
        this.date_entry = date_entry;
        this.expiry_date = expiry_date;
        this.call_ltp = call_ltp;
        this.call_volume = call_volume;
        this.call_writer_oi = call_writer_oi;
        this.call_wri_oi_prev= call_wri_oi_prev;
        this.strike_price = strike_price;
        this.nifty_spot_price = nifty_spot_price;
    }
}

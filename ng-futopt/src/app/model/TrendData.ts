export interface TrendData {
    recdate: string; // Date and time in 'YYYY-MM-DD HH:mm:ss' format
    stdpivot?: string; // Optional property for StdPivot
    dxytrend?: string; // Optional property for DXY Trend
    usbondyield?: number; // Optional property for US Bond Yield
    niftyimopen?: number; // Optional property for Nifty Implied Open
    isLatest?: boolean; // This will be set dynamically in the frontend (true for the most recent trend)
  }
  
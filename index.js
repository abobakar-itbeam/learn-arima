import { ArimaPredict } from "./ARIMA.js";
const data = [100, 200, 150, 275, 300, 250, 400, 350];

const Option = {
  p: 1,
  d: 1,
  q: 1,
  P: 1,
  D: 0,
  Q: 1,
  s: 1,
  verbose: false,
};

const forecast1 = ArimaPredict(data, Option, 6, "year");
console.log("Forecast 1 for year:", forecast1);

const forecast2 = ArimaPredict(data, Option, 6, "month");
console.log("Forecast 2 for months:", forecast2);

const forecast3 = ArimaPredict(data, Option, 6, "quoter");
console.log("Forecast 3 for Quoter:", forecast3);

const forecast4 = ArimaPredict(data, Option, 6, "semiYear");
console.log("Forecast 4 for Quoter:", forecast4);

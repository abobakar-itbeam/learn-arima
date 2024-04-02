import ARIMA from "arima";

let RF = {
  year: 1,
  quarter: 4,
  month: 12,
  semiYear: 2,
};

export function ArimaPredict(data, Option, FP = 3, type) {
  Option.s = RF[type];
  let PredictValue = Option.s * FP;
  console.log("PredictValue : ", PredictValue);
  const model = new ARIMA(Option);
  model.train(data);
  return model.predict(PredictValue);
}

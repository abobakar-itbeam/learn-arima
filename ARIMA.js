import ARIMA from "arima";

let types = {
  year: 1,
  quoter: 4,
  month: 12,
  semiYear: 2,
};

export function ArimaPredict(data, Option, PredictValue = 3, type) {
  Option.s = types[type];
  const model = new ARIMA(Option);
  model.train(data);
  return model.predict(PredictValue);
}


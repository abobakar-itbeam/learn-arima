import { ArimaPredict } from "./ARIMA.js";
const data = {
  code1:[100,200,250,275,400,350,450,500,475,550],
  code2:[100,200,300,400,500,600,700,800,900,1000],
  code3:[100,200,300,400,500,600,700,800,900,1000],
  code4:[100,200,300,400,500,600,700,800,900,1000],
  code5:[100,200,300,400,500,600,700,800,900,1000],
}


const OutputData={}

const Option = {
  p: 1,
  d: 1,
  q: 3,
  P: 1,
  D: 1,
  Q: 1,
  s: 1,
  verbose: false,
};
let FP = 3;

for(let code in data){
  //console.log(data[code])
  const forecast1 = ArimaPredict(data[code], Option, FP, "year");
  OutputData[`${code}`]=[...data[code],...forecast1[0]]
  console.log(`Forecast for ${code}:`, forecast1);

}

console.log("OutputData : ",OutputData)


// const forecast1 = ArimaPredict(data, Option, FP, "year");
// console.log("Forecast 1 for year:", forecast1);

// const forecast2 = ArimaPredict(data, Option, FP, "month");
// console.log("Forecast 2 for months:", forecast2);

// const forecast3 = ArimaPredict(data, Option, FP, "quarter");
// console.log("Forecast 3 for Quoter:", forecast3);

// const forecast4 = ArimaPredict(data, Option, FP, "semiYear");
// console.log("Forecast 4 for Quoter:", forecast4);

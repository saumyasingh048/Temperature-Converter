// Imported DOM - Document Object Model Reference
const fahrenheit = document.querySelector("#f");
const rankie = document.querySelector("#r");
const celsius = document.querySelector("#c");
const centigrade = document.querySelector("#C");
const kelvin = document.querySelector("#k");
const btnF = document.querySelector(".btn-f");
const btnR = document.querySelector(".btn-r");
const btnC = document.querySelector(".btn-c");
const btn_C = document.querySelector(".btn-C");
const btnK = document.querySelector(".btn-k");
const btnSmall = document.querySelector(".btn-sm");

const fahrenheitConversion = (f) => {
  // Fahrenheit to Rankie
  const fTOr = (f) => (+f + 459.67).toFixed(2);
  // Fahrenheit to Celsius or Centigrade
  const fTOc = (f) => ((f - 32) / 1.8).toFixed(2);
  // Fahrenheit to Kelvin
  const fTOk = (f) => (((+f + 459.67) * 5) / 9).toFixed(2);
  // Output
  rankie.value = fTOr(f);
  celsius.value = fTOc(f);
  centigrade.value = fTOc(f);
  kelvin.value = fTOk(f);
};

const rankieConversion = (r) => {
  // Rankie to Fahrenheit
  const rTOf = (r) => (r - 459.67).toFixed(2);
  // Rankie to Celsius or Centigrade
  const rTOc = (r) => (((r - 491.67) * 5) / 9).toFixed(2);
  // Rankie to Kelvin
  const rTOk = (r) => ((r * 5) / 9).toFixed(2);
  // Output
  fahrenheit.value = rTOf(r);
  celsius.value = rTOc(r);
  centigrade.value = rTOc(r);
  kelvin.value = rTOk(r);
};

const celsiusConversion = (c) => {
  // Celsius/Centigrade to Rankie
  const cTOr = (c) => (((+c + 273.15) * 9) / 5).toFixed(2);
  // Celsius/Centigrade to Fahrenheit
  const cTOf = (c) => ((c * 9) / 5 + 32).toFixed(2);
  // Celsius/Centigrade to Kelvin
  const cTOk = (c) => (+c + 273.15).toFixed(2);
  // Output
  fahrenheit.value = cTOf(c);
  rankie.value = cTOr(c);
  centigrade.value = c;
  kelvin.value = cTOk(c);
};

const centigradeConversion = (c) => {
  // Celsius/Centigrade to Rankie
  const cTOr = (c) => (((+c + 273.15) * 9) / 5).toFixed(2);
  // Celsius/Centigrade to Fahrenheit
  const cTOf = (c) => ((c * 9) / 5 + 32).toFixed(2);
  // Celsius/Centigrade to Kelvin
  const cTOk = (c) => (+c + 273.15).toFixed(2);
  // Output
  fahrenheit.value = cTOf(c);
  rankie.value = cTOr(c);
  celsius.value = c;
  kelvin.value = cTOk(c);
};

const kelvinConversion = (k) => {
  // Kelvin to Fahrenheit
  const kTOf = (k) => ((k * 9) / 5 - 459.67).toFixed(2);
  // Kelvin to Rankie
  const kTOr = (k) => ((k * 9) / 5).toFixed(2);
  // Kelvin to Celsius/Centigrade
  const kTOc = (k) => (k - 273.15).toFixed(2);
  // Output
  fahrenheit.value = kTOf(k);
  rankie.value = kTOr(k);
  celsius.value = kTOc(k);
  centigrade.value = kTOc(k);
};

const fahrenheitParameter = () => {
  const fahrenheitParam = fahrenheit.value;
  fahrenheitConversion(fahrenheitParam);
};

btnF.addEventListener("click", fahrenheitParameter);

const rankieParameter = () => {
  const rankieParam = rankie.value;
  rankieConversion(rankieParam);
};

btnR.addEventListener("click", rankieParameter);

const celsiusParameter = () => {
  const celsiusParam = celsius.value;
  celsiusConversion(celsiusParam);
};

btnC.addEventListener("click", celsiusParameter);

const centigradeParameter = () => {
  const centigradeParam = centigrade.value;
  centigradeConversion(centigradeParam);
};

btn_C.addEventListener("click", centigradeParameter);

const kelvinParameter = () => {
  const kelvinParam = kelvin.value;
  kelvinConversion(kelvinParam);
};

btnK.addEventListener("click", kelvinParameter);

const check = () => {
  if (fahrenheit.value != "") fahrenheitParameter();
  else if (rankie.value != "") rankieParameter();
  else if (celsius.value != "") celsiusParameter();
  else if (centigrade.value != "") centigradeParameter();
  else if (kelvin.value != "") kelvinParameter();
};

btnSmall.addEventListener("click", check);

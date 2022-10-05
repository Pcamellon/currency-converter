// Libs
// import { get } from "axios";

// HTML Elements
const fromCurrencyElem = document.querySelector("#from");
const toCurrencyElem = document.querySelector("#to");
const fromQtyElem = document.querySelector("#from-qty");
// const toQtyElem = document.querySelector("#to-qty");

//
// const API_KEY = `6OAfpJGCnjvjgHXXFAb5yUko7L2YweJt`;
// const API = `https://api.exchangerate.host/convert`;

// const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// const getExchangeRate = async (fromCurrency, toCurrency) => {
//   try {
//     const response = await axios.get(
//       "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1"
//     );

//     const rate = response.data.rates;
//     const euro = 1 / rate[fromCurrency];
//     const exchangeRate = euro * rate[toCurrency];

//     return exchangeRate;
//   } catch (error) {
//     throw new Error(
//       `Unable to get currency ${fromCurrency} and  ${toCurrency}`
//     );
//   }
// };

// const getCountries = async (currencyCode) => {
//   try {
//     const response = await axios.get(
//       `https://restcountries.eu/rest/v2/currency/${currencyCode}`
//     );

//     return response.data.map((country) => country.name);
//   } catch (error) {
//     throw new Error(`Unable to get countries that use ${currencyCode}`);
//   }
// };

const convertCurrency = (e) => {
  // TODO
  // Check what changed :  e.target.id  == from-qty {} ...

  const fromQty = e.target.value;

  console.log(`fromQty: ${fromQty}`);

  // let exchangeRate = -1;
  // // let countries = [];

  // const fromCurrency = fromCurrencyElem.value;
  // const toCurrency = toCurrencyElem.value;

  // let fromQty = parseFloat(fromQtyElem.value);
  // let toQty = parseFloat(toQtyElem.value);

  // let headers = new Headers();
  // headers.append("apikey", API_KEY);

  // let requestOptions = {
  //   method: "GET",
  //   // redirect: "follow"
  //   // headers: headers
  // };

  // const response = await fetch(
  //   `${API}?from=${fromCurrency}&to=${toCurrency}`,
  //   requestOptions
  // );
  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.log("error", error));

  // let { info } = JSON.parse(await response.text());

  // return response;

  // try {
  //   const response = await get(FIXER_API);
  //   console.log(response);
  // } catch (error) {
  //   throw new Error(`Unable to get currency ${error}`);
  // }

  // console.log(response.data);

  // await Promise.all([
  //   async () => {
  // const response = await axios.get(
  //   "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1"
  // );

  // console.log(response.data);

  // exchangeRate = info["rate"];
  // const euro = 1 / rate[fromCurrency];
  // const exchangeRate = euro * rate[toCurrency];

  // return exchangeRate;
  // return "exchangeRate";

  // try {
  //
  // } catch (error) {
  // throw new Error(
  //   `Unable to get currency ${fromCurrency} and  ${toCurrency}`
  // );
  // }
  // }
  // ]);

  //   await Promise.all([
  //   getExchangeRate(fromCurrency, toCurrency),
  //   getCountries(toCurrency)
  // ]).then(([exchangeRateValue, countriesValue]) => {
  //   exchangeRate = exchangeRateValue;
  //   countries = countriesValue;
  // });

  // toQty = (fromQty * exchangeRate).toFixed(2);
  // toQtyElem.value = fromQty * exchangeRate;
};

fromQtyElem.addEventListener("change", convertCurrency);
// .then((message) => {
//   console.log(message);
// });
// .catch((error) => {
//   console.log(error.message);
// });

// console.log(convertCurrency());

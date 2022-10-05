// Libs
// const axios = require("axios");

// HTML Elements
const fromCurrencyElem = document.querySelector("#from");
const toCurrencyElem = document.querySelector("#to");
const fromQtyElem = document.querySelector("#from-qty");
const toQtyElem = document.querySelector("#to-qty");

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

const convertCurrency = async () => {
  // let exchangeRate = -1;
  // let countries = [];

  const fromCurrency = fromCurrencyElem.value;
  const toCurrency = toCurrencyElem.value;

  let fromQty = parseFloat(fromQtyElem.value);
  let toQty = parseFloat(toQtyElem.value);

  // toQty.value = fromQty * exchangeRate;

  // await Promise.all([
  //   getExchangeRate(fromCurrency, toCurrency),
  //   getCountries(toCurrency)
  // ]).then(([exchangeRateValue, countriesValue]) => {
  //   exchangeRate = exchangeRateValue;
  //   countries = countriesValue;
  // });
  // const convertedAmount = (amount * exchangeRate).toFixed(2);
  // return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
};

convertCurrency();
// .then((message) => {
//   console.log(message);
// })
// .catch((error) => {
//   console.log(error.message);
// });

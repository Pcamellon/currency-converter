# Master Async/Await With This Real World Example

## Currency Converter Tutorial

This is a code repository for the corresponding [article](https://medium.freecodecamp.org/how-to-master-async-await-with-this-real-world-example-19107e7558ad)  on Medium.

In this tutorial, we will build simple, but educational and useful application that is going to improve your overall knowledge of Async/Await.

The program will take in currency code we want to convert from and currency code we want to convert to, as well as the amount of money, afterwards, the program will output correct exchange rate based on the data from the API’s.

In this application we’re going receive data from two asynchronous sources:

1.  Currency Layer — [https://currencylayer.com ](https://currencylayer.com%20/)  —  You’ll need to sign up for free so you can use API Access Key. This API will provide us with data needed to calculate exchange rate between currencies.
2.  Rest Countries — [http://restcountries.eu/ ](http://restcountries.eu/%E2%80%8A)  —  This API will give us information about where can we use the currency we just converted our money to.

The program will take in a currency code we want to convert from and currency code we want to convert to, as well as the amount of money. The output will result in a correct exchange rate based on the data from not one, but two different API’s. While we're creating our project, I'm also going to teach you how to use Quokka.js. Quokka is a developer productivity tool for rapid JavaScript development. Simply said, using Quokka, all values are updated and displayed in your code editor next to your code, as you type. No more need for console logs or losing yourself while trying to debug a simple error.
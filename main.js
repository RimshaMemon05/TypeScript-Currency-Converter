#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\n \t Welcome to 'Rimi Coding' - Currency Converter\n"));
//Define the List of Currencies and their Exhange rates:
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "AUD": 1.65,
    "CAD": 1.3,
    "PKR": 277.7, //Pakistani Rupees
};
// Prompt the user to select currencies from and to.
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//Perform Currency Conversion By using Formula:
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of conversion:
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the Converted amount:
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);

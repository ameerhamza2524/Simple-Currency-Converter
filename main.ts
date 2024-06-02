#!/usr/bin/env node
import inquirer from 'inquirer';

// Currency conversion rates with respect to USD
let c_amount: { [key: string]: number } = {
    PKR: 278.10,
    UAE: 3.67,
    IND: 83.46,
    USD: 1
}

async function main() {
    // Prompt the user for input
    let ans = await inquirer.prompt([
        {
            name: 'from',
            message: 'Convert from:',
            type: 'list',
            choices: ['PKR', 'USD', 'UAE', 'IND']
        },
        {
            name: 'to',
            message: 'Convert to:',
            type: 'list',
            choices: ['PKR', 'USD', 'UAE', 'IND']
        },
        {
            name: 'amount',
            message: 'Enter your amount:',
            type: 'number',
            validate: function (value: number) {
                if (isNaN(value) || value <= 0) {
                    return 'Please enter a valid amount greater than zero.';
                }
                return true;
            }
        }
    ]);

    // Perform currency conversion
    let convertedAmount = c_amount[ans.to] / c_amount[ans.from] * ans.amount;

    // Log the converted amount with two decimal places
    console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${ans.to}`);
}

main();

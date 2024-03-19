#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { messege: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the opretors to preform action ",
        type: "list",
        name: "opretors",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.opretors === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.opretors === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.opretors === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.opretors === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}

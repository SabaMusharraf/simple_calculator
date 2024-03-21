import inquirer from "inquirer";
// Input from the user
let userNum = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Operator To Perform The Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (userNum.operator === "Addition") {
    console.log(userNum.firstNumber + userNum.secondNumber);
}
else if (userNum.operator === "Subtraction") {
    console.log(userNum.firstNumber - userNum.secondNumber);
}
else if (userNum.operator === "Multiplication") {
    console.log(userNum.firstNumber * userNum.secondNumber);
}
else if (userNum.operator === "Division") {
    console.log(userNum.firstNumber / userNum.secondNumber);
}
else {
    console.log("You entered Wrong");
}

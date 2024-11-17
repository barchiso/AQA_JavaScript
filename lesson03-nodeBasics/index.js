import chalk from "chalk";

console.log(chalk.blue("Hello world!"));
console.log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
console.log(chalk.hex("#FFA500").bold("Bold Orange!"));
console.log(chalk.bgAnsi256(194)("Honeydew, more or less"));
console.log(chalk.rgb(15, 100, 204).inverse("Hello World!"));

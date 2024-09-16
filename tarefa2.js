const inquirer = require('inquirer');
const chalk = require('chalk');


inquirer.prompt([
  {
    type: 'input',
    name: 'nome',
    message: 'Qual seu nome?'
  },
  {
    type: 'input',
    name: 'idade',
    message: 'Qual sua idade?',
    validate: value => {
      const valid = !isNaN(parseFloat(value)) && isFinite(value);
      return valid || 'Insira um número válido.';
    }
  }
])
.then(answers => {
  const { nome, idade } = answers;

  
  console.log(chalk.bgYellow.black(`Opa, ${nome}. Você tem ${idade} anos.`));
})
.catch(error => {
  console.error(chalk.bgRed.white('Ocorreu um erro: ' + error.message));
});
var inquirer = require('inquirer');



const sorter = pdata => console.log(pdata)

inquirer.prompt([
{
    type: 'list',
    name: 'todo',
    message: 'What license does this project have',
    choices: ['View All Departments', 'View All Roles', 'View All Employees',  'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role']
  }
]).then(data => sorter(data))

 
var inquirer = require('inquirer')
var config = require('../../config.js')
var cloneRepo = require('./download.js')
const Action = async(project,args)=>{
    // console.log(program);
    // console.log(args);
    const answer = await inquirer.prompt([
        {
            type:'list',
            name:'framework',
            choices:config.framework,
            message:'Please choose your framework'
        }
    ]);
    cloneRepo(config.frameworkurl[answer.framework],project)
};
module.exports = Action
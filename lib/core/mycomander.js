const Action = require('./action')

const mycomander = function(program){
    program
    .command('create <project-name> [other...]')
    .alias('cre')
    .description('创建一个项目')
    .action(Action)
}
module.exports = mycomander
#! /usr/bin/env node
const {program} = require('commander')
// console.log('mycli');
// if(process.argv[2]=='--help'){
//     console.log('获取到了命令参数')
// }
const myhelp = require('../lib/core/help')
myhelp(program)
const mycomander = require('../lib/core/mycomander')
mycomander(program)

program.parse(process.argv)
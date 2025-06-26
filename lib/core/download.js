const { exec } = require('child_process');
const chalk = require('chalk');
const ora = require('ora');
const cloneRepo =  (url, dir)=> {
    const spinner = ora('正在下载代码...').start();
    spinner.text = '正在下载代码...';
    exec(`git clone ${url} ${dir}`, (err)=> {
    if (err) {
        spinner.fail('❌ Git 下载失败');
        return;
        }
    spinner.succeed('✔️ Git 下载成功');
    console.log(chalk.blue.bold('Done!'),chalk.bold('you run:') )
    console.log('cd'+ dir)
    console.log('npm install')
    console.log('npm run dev')
    });
};

module.exports = cloneRepo
// .replrc.js
// import {fetch as fetchPolyfill} from 'whatwg-fetch'

const _ = require('lodash');
const wgf = require('whatwg-fetch');
const chalk = require('chalk');

const makeRequest = () => {
  fetch('https://inf.wefindx.com/topics/')
  .then(function(response) {
    return response.json()
  }).then((data) => {
    return data
  })
}

module.exports = {
  context: [
    {name: 'l', value: _},
    {name: 'meaningOfLife', value: 42},
    {name: 'fetch', value: wgf.fetch},
    {name: 'm', value: makeRequest},
  ],
  banner: (context, pkg) => {
    console.log(chalk.bold(`Welcome to the REPL for Data-Browser ${pkg.version}.`));
    console.log(chalk.green('Happy hacking!'));
    console.log(chalk.cyan('Context:'), _.keys(context).sort().join(', '));
  }
}

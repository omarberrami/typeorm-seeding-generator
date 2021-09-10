#!/usr/bin/env node

import * as chalk from 'chalk';
import clear = require('clear');
import * as figlet from 'figlet';
import { Command } from 'commander';
import { seedGenerator } from './builder/seed-generator';

clear();
console.info(chalk.red(figlet.textSync('typeorm-seeding-generator', { horizontalLayout: 'default' })));

const program = new Command();
program
  .version('1.0.0')
  .description('Cli to generate seed file')
  .requiredOption('-n, --name <file name>', 'file name')
  .parse(process.argv);

const options = program.opts();

(async () => {
  await seedGenerator(options);
})();

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

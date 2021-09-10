import * as chalk from 'chalk';
import { OptionValues } from 'commander';
import { readFileSync, writeFileSync } from 'fs';
import { getConnectionOptions } from 'typeorm';
import { toCamelCase, camelToDashedCase, capitalize } from '../utils/string-utils';

export const seedGenerator = async (options: OptionValues) => {
  const connection = await getConnectionOptions();

  const date = new Date();

  if (options.name.match(/^\d/)) {
    console.error(chalk.red('Error name file start with number'));
    return;
  }

  // @ts-ignore
  if (connection && connection.cli && connection.cli.seedsDir) {
    let data = readFileSync(__dirname + '/../template/template-seed.template', { encoding: 'utf8', flag: 'r' });

    data = data.replace('{{nameCLasseSeed}}', capitalize(toCamelCase(options.name + '-' + date.getTime())));

    try {
      writeFileSync(
        // @ts-ignore
        connection.cli.seedsDir + '/' + camelToDashedCase(date.getTime() + '-' + options.name) + '.ts',
        data,
      );
    } catch (e) {
      console.error(chalk.red('Error writing file'));
    }
  } else {
    console.error(chalk.red('Error loading seeds Dir'));
  }
};

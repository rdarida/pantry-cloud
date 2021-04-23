#!/usr/bin/env node

import dotenv from 'dotenv';
import yargs from 'yargs/yargs';
import { Pantry } from '.';

dotenv.config();

((argv) => {
  try {
    new Pantry(argv.id);
  } catch (error) {
    console.log(error);
  }
})(
  yargs(process.argv.slice(2))
    .option('id', {
      alias: 'i',
      type: 'string',
      default: process.env.PANTRY_ID || ''
    })
    .help().argv
);

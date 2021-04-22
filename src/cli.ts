#!/usr/bin/env node

import log from '.';

((argv: string[]) => {
  try {
    log(...argv);
  } catch (error) {
    console.log(error);
  }
})(process.argv.slice(2));

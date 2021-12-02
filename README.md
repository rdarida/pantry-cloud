<img src="https://repository-images.githubusercontent.com/360660059/254c4f00-a3b8-11eb-951a-ee9b9f6e0bca">
<h1 align="center">pantry-cloud</h1>
<p align="center">
  NodeJS package for <a href="https://getpantry.cloud" target="_blank">Pantry</a>
</p>
<p align="center">
  <a href="https://github.com/rdarida/pantry-cloud/actions/workflows/release.yml" target="_blank" alt="GitHub Actions">
    <img src="https://github.com/rdarida/pantry-cloud/actions/workflows/release.yml/badge.svg" alt="Release">
  </a>

  <a href="https://sonarcloud.io/dashboard?id=rdarida_pantry-cloud" target="_blank" alt="SonarCloud">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=rdarida_pantry-cloud&metric=alert_status" alt="quality gate">
  </a>

  <a href="https://sonarcloud.io/dashboard?id=rdarida_pantry-cloud" target="_blank" alt="SonarCloud">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=rdarida_pantry-cloud&metric=coverage" alt="coverage">
  </a>

  <img src="https://img.shields.io/librariesio/release/npm/pantry-cloud">

  <a href="https://rdarida.github.io/pantry-cloud/coverage/" target="_blank">
    <img src="https://img.shields.io/badge/lcov-report-grey" />
  </a>

  <br>

  <a href="https://npmjs.org/package/pantry-cloud" target="_blank">
    <img src="https://img.shields.io/npm/v/pantry-cloud" />
  </a>

  <a href="https://github.com/rdarida/patry-cloud" target="_blank">
    <img src="https://img.shields.io/badge/-repository-222222?style=flat&logo=github" />
  </a>

  <a href="https://www.patreon.com/rdarida" target="_blank">
    <img src="https://img.shields.io/badge/-patreon-222222?style=flat&logo=patreon" />
  </a>
</p>
<hr>

## Install
You can get **`pantry-cloud`** via [npm](https://www.npmjs.com/package/pantry-cloud).
```
npm install pantry-cloud
```

## Usage
```ts
import { Pantry } from 'pantry-cloud';

const pantry = new Pantry('<PANTRY_ID>');

const details = await pantry.getPantry();

/*
 * Logs:
 * {
 *   name: '...',
 *   descriptions: '...',
 *   errors: [...],
 *   notifications: true,
 *   percentFull: 0,
 *   baskets: [...]
 * }
 */
console.log(details);

// The `postBasket` async method creates a new basket or replaces an existing one.
await pantry.postBasket('testBasket');

// Then `putBasket` async method updates the contents of a given basket. 
const contentOfTestBasket = await pantry.putBasket('testBasket', { content: 'test' });

/*
 * Logs:
 * {
 *   content: 'test'
 * }
 */
console.log(contentOfTestBasket);

// The `getBasket` async method returns with the contents of the given basket.
const testBasket = await pantry.getBasket('testBasket');

/*
 * Logs:
 * {
 *   content: 'test'
 * }
 */
console.log(testBasket);

// The `deleteBasket` async method deletes the entire baskte.
await pantry.deleteBasket('testBasket');
```

## API
See in the [documentation](https://rdarida.github.io/pantry-cloud).

<hr>
<details>
  <summary>
    <strong>Resources</strong>
  </summary>

  - [Pantry's Documentation](https://documenter.getpostman.com/view/3281832/SzmZeMLC)
  - [Pantry's Source Code](https://github.com/imRohan/Pantry)
</details>
<hr>

<p align="center">
  <a href="LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-green" />
  </a>
</p>

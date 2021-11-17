import { config } from 'dotenv';
import { Pantry } from '../src/Pantry';

config();
jest.setTimeout(60 * 1000);

describe('Test Pantry', () => {
  const basketName = 'test_baskte';
  let pantry: Pantry;

  beforeAll(() => {
    pantry = new Pantry(process.env.PANTRY_ID || '');
  });

  test('should return with Pantry', async () => {
    const actual = await pantry.getPantry();
    expect(actual).toBeTruthy();
    expect(actual.name).toEqual('Pantry Cloud Test');
  });

  test('should create the test_basket', async () => {
    const actual = await pantry.postBasket(basketName);
    expect(actual).toBeTruthy();
    expect(typeof actual).toEqual('string');
    expect(actual.indexOf(basketName)).toBeGreaterThanOrEqual(0);
  });

  test('should put test content into the test_bucket', async () => {
    let actual = await pantry.putBasket(basketName, { content: 'test' });
    expect(actual).toBeTruthy();
    expect(actual.content).toEqual('test');

    actual = await pantry.putBasket(basketName, { test: 'content' });
    expect(actual).toBeTruthy();
    expect(actual.content).toEqual('test');
    expect(actual.test).toEqual('content');

    actual = await pantry.putBasket(basketName, { content: 'content', test: 'test' });
    expect(actual).toBeTruthy();
    expect(actual.content).toEqual('content');
    expect(actual.test).toEqual('test');
  });

  test('should return with the content of the test_basket', async () => {
    const actual = await pantry.getBasket(basketName);
    expect(actual).toBeTruthy();

    // TODO: make test for non-existing basket
  });

  test('should delete the test_basket', async () => {
    const actual = await pantry.deleteBasket(basketName);
    expect(actual).toBeTruthy();
    expect(typeof actual).toEqual('string');
    expect(actual.indexOf(basketName)).toEqual(0);
  });
});

import dotenv from 'dotenv';
import { Pantry } from '../src/Pantry';

describe('Test Pantry', () => {
  let pantry: Pantry;
  let id: string;

  beforeAll(() => {
    dotenv.config();
  });

  beforeEach(() => {
    pantry = new Pantry(process.env.PANTRY_ID || '');
  });

  test('should return with Status', async () => {
    const status = await pantry.getStatus();
    expect(status).not.toBeUndefined();
    expect(status.website).not.toBeUndefined();
    expect(status.api).not.toBeUndefined();
    expect(status.dataStore).not.toBeUndefined();
  });

  test('should create a new PantryID', async () => {
    const name = 'TestPantry';
    id = await pantry.create({
      name,
      contactEmail: `${name.toLowerCase()}@eemmaaiill.com`
    });
    console.log(id);
    expect(id).not.toBeUndefined();
    expect(id.length).toBeGreaterThan(1);
  });

  xtest('should return with Pantry', async () => {
    const p = await pantry.getPantry();
    console.log(p);
  });

  xtest('should update Pantry', async () => {
    const p = await pantry.putPantry({
      name: 'TestPantryUpdated',
      description: 'Updated description for TestPantryUpdated',
      notifications: false
    });

    expect(p).toBeTruthy();
    expect(p.name).toEqual('TestPantryUpdated');
    expect(p.description).toEqual('Updated description for TestPantryUpdated');
    expect(p.notifications).toBeFalsy();
  });

  test('should delete Pantry', async () => {
    console.log(await pantry.deletePantry(id));
  });
});

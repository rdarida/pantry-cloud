import { Method } from 'axios';

import { fetch } from './fetch';
import { Details } from './Details';

export class Pantry {
  private readonly id: string;

  /**
   * @param {string} id Your PantryID
   */
  constructor(id: string) {
    this.id = id;
  }

  /**
   * @return {Details} The details of the pantry, including a list of
   * baskets currently stored inside it
   */
  public async getPantry(): Promise<Details> {
    return fetch(this.id, 'GET');
  }

  /**
   * Creates a new basket or replaces an existing one inside a given pantry.
   * @param {string} basketName The name of the basket
   * @return {string} Notification about the result
   */
  public async postBasket(basketName: string): Promise<string> {
    return this.fetchBasket(basketName, 'POST');
  }

  /**
   * Updates the contents of the given basket.
   * <b>This operation performs a deep merge and will overwrite the values
   * of any existing keys, or append values to nested objects or arrays.</b>
   * @param {string} basketName The name of the basket
   * @param {any} data Any type of data
   * @return {any} The full contents of the newly updated basket
   */
  public async putBasket(basketName: string, data: any): Promise<any> {
    return this.fetchBasket(basketName, 'PUT', data);
  }

  /**
   * Returns with the contents of the given basket.
   * @param {string} basketName The name of the basket
   * @return {any} The full contents of the basket
   */
  public async getBasket(basketName: string): Promise<any> {
    return this.fetchBasket(basketName, 'GET');
  }

  /**
   * Deletes the entire basket.
   * <b>Warning, this action cannot be undone.</b>
   * @param {string} basketName The name of the basket
   * @return {string} Notification about the deletion
   */
  public async deleteBasket(basketName: string): Promise<string> {
    return this.fetchBasket(basketName, 'DELETE');
  }

  private async fetchBasket<T>(
    basketName: string,
    method: Method,
    data = {}
  ): Promise<T> {
    return fetch([this.id, 'basket', basketName].join('/'), method, data);
  }
}

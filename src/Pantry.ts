import axios, { Method } from 'axios';
import { Status, Details, EditableDetails } from './types';

// TODO: Make static functions
export class Pantry {
  private static readonly BASE_URL = 'https://getpantry.cloud/apiv1';
  private readonly id: string;

  constructor(id: string) {
    this.id = id;
  }

  public async getStatus(): Promise<Status> {
    return Pantry.fetch([Pantry.BASE_URL, 'system', 'status'].join('/'), 'GET');
  }

  public async create(data: { name: string;  contactEmail: string; description?: string; }): Promise<string> {
    if (!data.description) {
      data.description = 'defaultDescription';
    }

    return Pantry.fetch([Pantry.BASE_URL, 'pantry', 'create'].join('/'), 'POST', data);
  }

  public async getPantry(): Promise<Details> {
    return this.fetchPantry('GET');
  }

  public async putPantry(details: EditableDetails): Promise<Details> {
    return this.fetchPantry('PUT', details);
  }

  public async deletePantry(id?: string): Promise<any> {
    return Pantry.fetch([Pantry.BASE_URL, 'pantry', id ? id : this.id].join('/'), 'DELETE');
  }

  private async fetchPantry(method: Method, data?: any): Promise<Details> {
    return Pantry.fetch([Pantry.BASE_URL, 'pantry', this.id].join('/'), method, data);
  }

  private static async fetch(url: string, method: Method, data = {}): Promise<any> {
    const headers = {
      'Content-Type': 'application/json'
    };

    return new Promise<any>((resolve, reject) => {
      axios({ url, method, headers, data: JSON.stringify(data) })
        .then(response => resolve(response.data))
        .catch(reason => reject(reason));
    });
  }
}

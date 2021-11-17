import axios, { Method } from 'axios';

const PANTRY_BASE_URL = 'https://getpantry.cloud';
const PANTRY_VERSION = 'apiv1';

export function fetch<T>(url: string, method: Method, data = {}): Promise<T> {
  url = [PANTRY_BASE_URL, PANTRY_VERSION, 'pantry', url].join('/');
  const headers = { 'Content-Type': 'application/json' };

  return new Promise<T>((resolve, reject) => {
    axios({ url, method, headers, data: JSON.stringify(data) })
      .then((response) => resolve(response.data))
      .catch((reason) => reject(reason));
  });
}

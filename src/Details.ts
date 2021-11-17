import { Basket } from './Basket';

export type Details = {
  name: string;
  descriptions: string;
  errors: string[];
  notifications: boolean;
  percentFull: number;
  baskets: Basket[];
};

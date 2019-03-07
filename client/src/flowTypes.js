// @flow

export type Restaurant = {
  id: number,
  name: string,
  cuisine: string,
  rating: 1 | 2 | 3,
  address: string,
  maxDeliveryTime: number,
  accepts10Bis: boolean
};

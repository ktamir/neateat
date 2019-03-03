// @flow

export type Restaurant = {
  name?: string,
  cuisine?: string,
  rating?: 1 | 2 | 3,
  address?: string,
  maxDeliveryTime?: 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120,
  accepts10Bis?: boolean
};

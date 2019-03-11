// @flow

export type Restaurant = {|
  id?: number,
  name: string,
  cuisine: string,
  rating: 1 | 2 | 3,
  address: string,
  maxDeliveryTime: number,
  accepts10Bis: boolean
|};

export type NeatEatError = {|
  title: string,
  description: string
|};

export type ServerError = {|
  error: string,
  exception: string
|};

export type NeatEatDataAction = {|
  type: string,
  data: Object
|};

export type NeatEatErrorAction = {|
  type: string,
  error: ServerError
|};

export type NeatEatPlainAction = {|
  type: string
|};

export type NeatEatAction = NeatEatDataAction & NeatEatErrorAction & NeatEatPlainAction;

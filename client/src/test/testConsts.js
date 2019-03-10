// Used in test snapshots
export const mockRestaurants = [
  {
    id: 1,
    name: 'Chez Tamir',
    cuisine: 'French',
    rating: 2,
    address: '144 Derech Menachem Begin, Tel Aviv, Israel',
    maxDeliveryTime: 60,
    accepts10Bis: true,
  },
  {
    id: 2,
    name: 'Tamir Trattoria',
    cuisine: 'Italian',
    rating: 1,
    address: '7 Derech Namir, Tel Aviv, Israel',
    maxDeliveryTime: 100,
    accepts10Bis: true,
  },
];

export const mockError = {
  error: 'Error Title',
  exception: 'Test Exception',
};

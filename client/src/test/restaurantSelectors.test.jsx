import { mockRestaurants } from './testConsts';
import { filteredRestaurants } from '../store/restaurantSelectors';

describe('restaurantSelector', () => {

  it('selector without filter', () => {
    const filtered = filteredRestaurants.resultFunc(mockRestaurants, null, null, null, null);

    // Assert that loading spinner is rendered
    expect(filtered).toEqual(mockRestaurants);
  });

  it('filter by name', () => {
    const filtered = filteredRestaurants.resultFunc(mockRestaurants, null, null, null, 'Chez');

    // Assert that loading spinner is rendered
    expect(filtered).toHaveLength(1);
    expect(filtered[0].name).toBe('Chez Tamir');
  });

  it('filter by cuisine', () => {
    const filtered = filteredRestaurants.resultFunc(mockRestaurants, 'Italian', null, null, null);

    // Assert that loading spinner is rendered
    expect(filtered).toHaveLength(1);
    expect(filtered[0].name).toBe('Tamir Trattoria');
  });
});

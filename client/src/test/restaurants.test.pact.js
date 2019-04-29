const { Pact, Matchers } = require('@pact-foundation/pact');
const axios = require('axios');

const EXPECTED_BODY = [{
  id: 255,
  name: 'Chez Tamir',
  cuisine: 'french',
  accepts_10_bis: true,
  address: '144 Derech Menachem Begin',
  max_delivery_time: 60,
  created_at: '2019-03-31T12:06:12.685Z',
  updated_at: '2019-03-31T12:06:12.685Z',
  rating: 2.0,
}];

const NEW_RESTAURANT_PAYLOAD = {
  name: 'Fat Diner',
  cuisine: 'Bar',
  accepts_10_bis: true,
  address: '422 Swift Groves',
  max_delivery_time: 103,
  rating: 2.0,
};

const EXPECTED_POST_BODY = {
  id: 257,
  name: 'Fat Diner',
  cuisine: 'Bar',
  accepts_10_bis: true,
  address: '422 Swift Groves',
  max_delivery_time: 103,
  created_at: '2019-04-29T09:15:06.451Z',
  updated_at: '2019-04-29T09:15:06.451Z',
  rating: 2,
};

describe('Restaurants API', () => {
  let url = 'http://localhost:8989/restaurants';

  // Copy this block once per interaction under test
  describe('Fetch restaurants API', () => {
    beforeEach(() => {
      const interaction = {
        uponReceiving: 'a request for restaurants',
        withRequest: {
          method: 'GET',
          path: '/restaurants',
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: Matchers.eachLike(EXPECTED_BODY[0]),
        },
      };
      return provider.addInteraction(interaction);
    });

    // add expectations
    it('fetches restaurants', done => {
      axios.get(url)
        .then(response => {
          expect(response.data).toEqual(EXPECTED_BODY);
        })
        .then(done)
        .catch(e => console.log(e));
    });
  });

  // describe('Add Restaurant', () => {
  //   beforeEach(() => {
  //     const interaction = {
  //       uponReceiving: 'a request for adding a restaurant',
  //       withRequest: {
  //         method: 'POST',
  //         path: '/restaurants',
  //         body: NEW_RESTAURANT_PAYLOAD,
  //       },
  //       willRespondWith: {
  //         status: 200,
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: Matchers.like(EXPECTED_POST_BODY),
  //       },
  //     };
  //     return provider.addInteraction(interaction);
  //   });
  //
  //   it('adds a restaurant', done => {
  //     axios.post(url, NEW_RESTAURANT_PAYLOAD)
  //       .then(response => {
  //         expect(response.data).toEqual(EXPECTED_BODY);
  //       })
  //       .then(done)
  //       .catch(e => console.log(e));
  //   });
  // });
});

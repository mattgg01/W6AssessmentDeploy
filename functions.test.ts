const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Shuffle 9 bots', () => {
        expect(shuffleArray).toHaveLength(9);
      });
})
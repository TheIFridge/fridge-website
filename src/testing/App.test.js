function sum(x, y) {
    return x + y;
  }
  
describe('sum', () => {
    test('test1', () => {
        expect(sum(2, 4)).toBe(6);
    });
});

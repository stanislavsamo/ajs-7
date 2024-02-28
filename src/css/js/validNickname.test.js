import Validator from './validNickname';

test.each([
  'axl-123m',
  'axel',
  'AXE',
  'axel123A',
  'axel_12axel',
  'axel-1-axel',
  'axel_a',
  'axel123_a',
  'axel123-a',
])('should validate number', (data) => {
  expect(Validator.validateUsername(data)).toBe(true);
});

test.each([
  'axel-1234',
  '1axel',
  '_AX',
  '-axel123',
  'axel12345axel',
  '@maxe1',
  'axel!a',
  'axel123_',
  'axel123-',
  'Алекс',
])('should not validate number', (data) => {
  expect(() => Validator.validateUsername(data)).toThrow();
});

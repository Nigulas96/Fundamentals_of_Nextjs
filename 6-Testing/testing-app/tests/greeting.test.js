import Greeting from '../utils/Greeting';

test('returns greeting with name', () => {
    expect(Greeting('Next.js')).toBe('Hello, Next.js!');
});
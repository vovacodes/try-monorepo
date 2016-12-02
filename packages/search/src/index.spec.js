import test from 'tape';
import Search from './index';

test('Search should be a class', (t) => {
    t.assert(typeof Search === 'function');
    t.end();
});

import test from 'tape';
import Grid from './index';

test('Grid should be a class', (t) => {
    t.assert(typeof Grid === 'function');
    t.end();
});

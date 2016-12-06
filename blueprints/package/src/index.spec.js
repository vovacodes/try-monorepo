import test from 'tape';
import packageEntrypoint from './index';

test('packageEntrypoint should be a function', (t) => {
    t.assert(typeof packageEntrypoint === 'function');
    t.end();
});

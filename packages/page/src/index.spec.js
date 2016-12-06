import test from 'tape';
import Page from './index';

test('Page should be a class', (t) => {
    t.assert(typeof Page === 'function');
    t.end();
});

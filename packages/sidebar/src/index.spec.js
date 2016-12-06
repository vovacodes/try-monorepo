import test from 'tape';
import Sidebar from './index';

test('Sidebar should be a function', (t) => {
    t.assert(typeof Sidebar === 'function');
    t.end();
});

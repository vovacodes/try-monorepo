import test from 'tape';
import Sidebar from './index';

test('Sidebar should be a function', (t) => {
    t.assert(typeof Sidebar === 'function');
    t.end();
});

test('Sidebar should have a render method', (t) => {
    const sidebar = new Sidebar();
    t.assert(typeof sidebar.render === 'function');
    console.log(sidebar.render());
    t.end();
});

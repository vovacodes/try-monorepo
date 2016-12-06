import Grid from 'wzrd-grid';


class Sidebar {
    constructor() {
        this.grid = new Grid();

        console.log('Sidebar is created');
    }

    render() {
        return `Sidebar:\n ${this.grid.render()}`;
    }
}

export default Sidebar;

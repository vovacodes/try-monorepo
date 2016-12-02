import Grid from 'wzrd-grid';

class Search {
    constructor() {
        this.grid = new Grid();

        console.log('Search is created');
    }

    getComponentName() {
        return 'Search';
    }
}

export default Search;

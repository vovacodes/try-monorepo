import Search from 'wzrd-search';

class Page {
    constructor() {
        this.search = new Search();

        console.log('Page is created');
    }

    render() {
        return `Page:\n${this.search.render()}`;
    }
}

export default Page;

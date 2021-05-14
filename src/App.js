import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';
import { api } from './api/api.js';

export default class App {
  constructor(){
    console.log("App is created");

    const top = document.createElement('div');
    top.className = 'top';

    const bottom = document.createElement('div');
    bottom.className = 'bottom';

    const searchBar = new SearchBar(top, keyword => {
      api.fetchImage(keyword).then(data => {
        SearchResult.updateData(data);
      });
    });

    const searchResult = new SearchResult(bottom);
    document.body.appendChild(top);
    document.body.appendChild(bottom);
  }
}

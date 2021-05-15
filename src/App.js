import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';
import SearchInfo from './components/SearchInfo.js';
import { api } from './api/api.js';

export default class App {
  constructor(){
    console.log("App is created");

    const top = document.createElement('div');
    top.className = 'top';

    const bottom = document.createElement('div');
    bottom.className = 'bottom';

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.classList.add('hidden');

    const searchBar = new SearchBar(top,
      keyword => {
          api.fetchImage(keyword).then(data => {
            console.log("fetchImage");
              console.log(keyword);
              searchResult.updateData(data);
          });
      },
      () => {
          api.fetchImageAll().then(data => {
              console.log(data);
              console.log("all");
              searchResult.updateData(data);
          });
      }
  );
  const searchResult = new SearchResult(bottom,
    target => {
        const modal = document.querySelector('.modal');
        searchInfo.updateData(target.data);
        modal.classList.toggle('hidden');
    }
  );

  const searchInfo = new SearchInfo(modal);
    document.body.appendChild(top);
    document.body.appendChild(bottom);
    document.body.appendChild(modal);
  }
}


import { api } from './api/api.js';
import DetailModal from './components/DetailModal.js';
import ResultSection from './components/ResultSection.js';
import SearchingSection from './components/SearchingSection.js';

export default class App {
  constructor($target){
    console.log($target);
    const searchingSection = new SearchingSection({
      $target,
      onSearch: keyword =>{
        api.fetchCats(keyword).then(data => {
          resultSection.setState(data);});
      },
      onRandom: () =>{
        api.fetchRandomCats().then(data => {
          resultSection.setState(data);
        });
      }
    });
    const resultSection = new ResultSection({
      $target,
      onClick: data => {detailModal.setState(data)}
    });
    const detailModal = new DetailModal({
      $target
    });

    this.focusOnSearchBox();
  }
  
  focusOnSearchBox() {
    const searchBox = document.querySelector('.search-box');
    searchBox.focus();
  }
}

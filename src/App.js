
import { api } from './api/api.js';
import DetailModal from './components/DetailModal.js';
import Loading from './components/Loading.js';
import ResultSection from './components/ResultSection.js';
import SearchingSection from './components/SearchingSection.js';

export default class App {
  constructor($target){
    console.log($target);
    const searchingSection = new SearchingSection({
      $target,
      onSearch: keyword =>{
        loading.toggleSpinner();
        api.fetchCats(keyword).then(data => {
          loading.toggleSpinner();
          resultSection.setState(data);});
      },
      onRandom: () =>{
        loading.toggleSpinner();
        api.fetchRandomCats().then(data => {
          loading.toggleSpinner();
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

    const loading = new Loading({$target});

    this.focusOnSearchBox();
  }
  
  focusOnSearchBox() {
    const searchBox = document.querySelector('.search-box');
    searchBox.focus();
  }
}

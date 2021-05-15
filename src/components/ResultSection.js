import card from './Card.js';

export default class ResultSection{
  constructor({$target, onClick}){
    this.data = null;
    this.onClick = onClick;
    this.section = document.createElement('section');
    this.section.className = 'results-section';
    $target.appendChild(this.section);
    this.render();
  }

  setState(data){
      this.data = data;
      this.render();
  }

  render(){
    if(this.data){
      this.section.innerHTML = '';

      const cardContainer = document.createElement('div');
      cardContainer.className = 'card-container';

      this.data.map(cat => {
        new card({
            $target : cardContainer,
            data : cat,
            onClick : this.onClick
        });
      });

      this.section.appendChild(cardContainer);
    }
  }
}
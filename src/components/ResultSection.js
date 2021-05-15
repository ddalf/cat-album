import card from './Card.js';

export default class ResultSection{
  constructor({$target, onClick}){
    this.data = null;
    this.onClick = onClick;
    this.section = document.createElement('section');
    this.section.className = 'results-section';
    $target.appendChild(this.section);
  }

  setState(data){
      this.data = data;
      this.render();
  }

  render(){
      this.section.innerHTML = '';
      if(this.data.length > 0){
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
    else{
        const noticeSection = document.createElement('section');
        noticeSection.className = 'noticeSection';

        const notice = document.createElement('h2');
        notice.className = 'notice';
        notice.innerText = '검색 결과가 없습니다.';

        const noticeImage = document.createElement('img');
        noticeImage.className = 'notice-image';
        noticeImage.src = 'src/img/emptybox.png';

        noticeSection.appendChild(notice);
        noticeSection.appendChild(noticeImage);
        this.section.appendChild(noticeSection);
    }
  }
}
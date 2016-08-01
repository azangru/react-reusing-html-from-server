import React, {Component} from 'react';
import Card from './card';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
  }

  getCards() {
    return this.props.showcase.tabs[0].resources[0].results;
  }

  onCardClick(cardId) {
    let cards = this.getCards();
    let card = cards.filter(card => card.id === cardId)[0];
    let invertedColors = {
      colorTop: card.colorBottom,
      colorBottom: card.colorTop
    };
    card.colorTop = invertedColors.colorTop;
    card.colorBottom = invertedColors.colorBottom;
    this.forceUpdate();
  }

  render() {
    let cards = this.getCards();
    cards = cards.map(card => <Card {...card} key={card.id} onCardClick={this.onCardClick} />);

    return (
      <div className="cards-container">
        <h1>Test Showcase</h1>
        {cards}
      </div>
    )
  }

}

import React from 'react';
import './MemoryGame.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      <img src={`/images/${props.img}.png`}></img>
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    let squareImg;
    if (this.props.cardArray[i]['isFaceDown']) {
      squareImg = 'blank';
    } else {
      squareImg = this.props.cardArray[i]['name'];
    }
    return <Square img={squareImg} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
        <div className="status">{this.props.status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </div>
    );
  }
}

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Find all the matches!',
      cardArray: [
        {
          name: 'cheeseburger',
          isFaceDown: true,
        },
        {
          name: 'cheeseburger',
          isFaceDown: true,
        },
        {
          name: 'fries',
          isFaceDown: true,
        },
        {
          name: 'fries',
          isFaceDown: true,
        },
        {
          name: 'hotdog',
          isFaceDown: true,
        },
        {
          name: 'hotdog',
          isFaceDown: true,
        },
        {
          name: 'ice-cream',
          isFaceDown: true,
        },
        {
          name: 'ice-cream',
          isFaceDown: true,
        },
        {
          name: 'milkshake',
          isFaceDown: true,
        },
        {
          name: 'milkshake',
          isFaceDown: true,
        },
        {
          name: 'pizza',
          isFaceDown: true,
        },
        {
          name: 'pizza',
          isFaceDown: true,
        },
      ],
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: [],
    };

    this.state.cardArray.sort(() => 0.5 - Math.random());
  }

  checkForMatch(id1, id2, cardsChosen1, cardsChosen2) {
    const cardArray = this.state.cardArray.slice();
    const cardsChosen = this.state.cardsChosen.slice();
    const cardsWon = this.state.cardsWon.slice();
    let status = this.state.status;

    console.log(cardsChosen);
    if (cardsChosen1 === cardsChosen2) {
      alert('You found a match!');
      cardArray[id1]['name'] = 'white';
      cardArray[id2]['name'] = 'white';
      cardsWon.push(cardsChosen1);
    } else {
      cardArray[id1]['isFaceDown'] = true;
      cardArray[id2]['isFaceDown'] = true;
      alert('Sorry, try again.');
      this.props.handleFailure()
    }

    // if (cardsWon.length === cardArray.length / 2) {
    //   status = 'Congratulations, you win!';
    //   this.props.counter()
    // }

    if (cardsWon.length === 1) {
      status = 'Congratulations, you win!';
      this.props.counter()
    }

    this.setState({
      status: status,
      cardArray: cardArray,
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: cardsWon,
    });
  }

  flipCard(i) {
    const cardArray = this.state.cardArray.slice();
    const cardsChosen = this.state.cardsChosen.slice();
    const cardsChosenId = this.state.cardsChosenId.slice();

    if (cardArray[i]['isFaceDown']) {
      cardsChosen.push(cardArray[i]['name']);
      cardsChosenId.push(i);
      cardArray[i]['isFaceDown'] = false;
    }

    this.setState({
      cardArray: cardArray,
      cardsChosen: cardsChosen,
      cardsChosenId: cardsChosenId,
    });

    if (cardsChosen.length === 2) {
      let id1 = cardsChosenId[0];
      let id2 = cardsChosenId[1];
      setTimeout(
        this.checkForMatch(id1, id2, cardsChosen[0], cardsChosen[1]),
        1000
      );
    }
  }

  handleClick(i) {
    this.flipCard(i);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            status={this.state.status}
            squares={this.state.squares}
            cardArray={this.state.cardArray}
            onClick={i => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

export default MemoryGame;

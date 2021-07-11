import React from 'react';

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
      squareImg = 'ring';
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
      status: 'Find all the matches...',
      cardArray: [
        {
          name: 'golem',
          isFaceDown: true,
        },
        {
          name: 'golem',
          isFaceDown: true,
        },
        {
          name: 'legolas',
          isFaceDown: true,
        },
        {
          name: 'legolas',
          isFaceDown: true,
        },
        {
          name: 'gandalf',
          isFaceDown: true,
        },
        {
          name: 'gandalf',
          isFaceDown: true,
        },
        {
          name: 'eye',
          isFaceDown: true,
        },
        {
          name: 'eye',
          isFaceDown: true,
        },
        {
          name: 'smaug',
          isFaceDown: true,
        },
        {
          name: 'smaug',
          isFaceDown: true,
        },
        {
          name: 'frodo',
          isFaceDown: true,
        },
        {
          name: 'frodo',
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
    // const cardsChosen = this.state.cardsChosen.slice();
    const cardsWon = this.state.cardsWon.slice();
    let status = this.state.status;

    if (cardsChosen1 === cardsChosen2) {
      alert('You found a match!');
      // cardArray[id1]['name'] = 'name';
      // cardArray[id2]['name'] = 'name';
      cardsWon.push(cardsChosen1);
    } else {
      cardArray[id1]['isFaceDown'] = true;
      cardArray[id2]['isFaceDown'] = true;

      alert('Sorry, try again.');
      this.props.handleFailure()
    }

    if (cardsWon.length === cardArray.length / 2) {
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
    }, () => { this.checkTwoCards(cardsChosen, cardsChosenId) });
  }

  checkTwoCards(cardsChosen, cardsChosenId) {
    setTimeout(() => {
      if (cardsChosen.length === 2) {
        let id1 = cardsChosenId[0];
        let id2 = cardsChosenId[1];
        this.checkForMatch(id1, id2, cardsChosen[0], cardsChosen[1]);
      }
    }, 500);

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

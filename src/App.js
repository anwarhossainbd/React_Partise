import React, {Component} from 'react';
import Book from "./Component/Book";

class App extends Component {

  constructor() {
    super();
    this.state={
      books:[
        { bookName:"Fajayel a Amol", writter:"Tablig Jammat"},
        { bookName:"Ahakame Jindigi", writter:"Mawlana Hemayet Ullah"},
        { bookName:"Behasti Jewor", writter:"Asraf Ali Thanvi"}
      ]
    }
  }

  render() {
    return (
        <div>
          <h1>welcome</h1>

          <Book bookName={this.state.books[0].bookName} writter={this.state.books[0].writter} />
          <Book bookName={this.state.books[1].bookName} writter={this.state.books[1].writter} />
          <Book bookName={this.state.books[2].bookName} writter={this.state.books[2].writter} />



        </div>
    );
  }
}

export default App;

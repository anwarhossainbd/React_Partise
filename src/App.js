import React, {Component} from 'react';
import "./App.css"
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

    changeBookState=(firstbookName)=>{

      this.setState({
          books:[
              { bookName:firstbookName, writter:"Tablig Jammat"},
              { bookName:"Ahakame Jindigi", writter:"Mawlana Hemayet Ullah"},
              { bookName:"Moroner Aga and Pore", writter:"Asraf Ali Thanvi"}
          ]
      })
    }

    changeWithInputState=(e)=>{

        this.setState({
            books:[
                { bookName:e.target.value, writter:"Tablig Jammat"},
                { bookName:"Ahakame Jindigi", writter:"Mawlana Hemayet Ullah"},
                { bookName:"Moroner Aga and Pore", writter:"Asraf Ali Thanvi"}
            ]
        })
    }


  render() {
    return (
        <div className="App">
          <h1>Book List</h1>

            <button onClick={this.changeBookState.bind(this,"1991")}>Change State</button>

            <input type="text" onChange={this.changeWithInputState} />

          <Book bookName={this.state.books[0].bookName} writter={this.state.books[0].writter} inputName={this.changeWithInputState} />
          <Book bookName={this.state.books[1].bookName} writter={this.state.books[1].writter} />
          <Book bookName={this.state.books[2].bookName} writter={this.state.books[2].writter} change={this.changeBookState.bind(this,"new life")} />



        </div>
    );
  }
}

export default App;

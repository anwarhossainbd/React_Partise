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



    changeWithInputState=(e,index)=>{

        const book={...this.state.books[index]}
        book.bookName=e.target.value ;
        let books =[...this.state.books]
        books[index]=book;
        this.setState({
            books:books ,
        })
    }

    deleteBookState=(index)=>{

      const item=[...this.state.books]
        item.splice(index,1)
        this.setState({
            books:item ,
        })
    }


  render() {


      const books =this.state.books.map((books,index)=>{
          return (
              <Book bookName={books.bookName} writter={books.writter} delete={this.deleteBookState.bind(this,index)} inputName={(e)=>this.changeWithInputState(e,index)} key={index}/>
          )
      })


    return (
        <div className="App">
            <h1 className="Headline">BOOK List</h1>
            
            {books}

        </div>
    );
  }
}

export default App;

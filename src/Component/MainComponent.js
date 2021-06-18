import React, {Component} from 'react';
import BookList from "./Lists/BookList";
import book from "../assets/book";
import NewBook from "./Representational/NewBook";


import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import BookDetails from "./Representational/BookDetails";

class MainComponent extends Component {
    constructor() {
        super();
        this.state={
            books: book,
            selectBook:null,
        }
    }

    selectBookHandler=(bookId)=>{
        const book = this.state.books.filter(result=>
            result.id===bookId
        )[0];
        this.setState({
            selectBook:book,
        })
    }

    render() {

           const books = <BookList books={this.state.books} selectBookHandler={this.selectBookHandler}  />


        return (
            <div className="App">

                <div className="nav-bar">
                    <ul>
                        <li><NavLink exact to="/">Home </NavLink></li>
                        <li><NavLink exact to="/new-book">New Book </NavLink></li>
                    </ul>
                </div>


                <Route path="/" exact  render={()=>books} />
                <Route path="/new-book" exact  component={NewBook} />


                <BookDetails bookdetails={this.state.selectBook} />

                {/*{books}*/}

                {/*<NewBook />*/}

            </div>
        );
    }

}

export default MainComponent;
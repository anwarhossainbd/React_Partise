import React, {Component} from 'react';
import BookList from "./Lists/BookList";
import book from "../assets/book";
import NewBook from "./Representational/NewBook";


import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
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


    deletebook=(index)=>{
        console.log(index)
       const item =[...this.state.books]
           item.splice(index,1)
        this.setState({
            books:item
        })
    }

    render() {

           const books = <BookList books={this.state.books} deletebook={this.deletebook} selectBookHandler={this.selectBookHandler}  />


        return (
            <div className="App">

                <div className="nav-bar">
                    <ul>
                        <li><NavLink exact to="/a">Home </NavLink></li>
                        <li><NavLink exact to="/new-book">New Book </NavLink></li>
                    </ul>
                </div>

                <Switch >
                <Route path="/books" exact  render={()=>books} />
                <Route path="/new-book" exact  component={NewBook} />
                <Route path="/newBook/:bookName" exact  render={()=><BookDetails bookdetails={this.state.selectBook} />} />

                <Redirect from="/a" to="/books"  />

                </Switch >


                {/*{books}*/}

                {/*<NewBook />*/}

            </div>
        );
    }

}

export default MainComponent;
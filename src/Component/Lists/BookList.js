import React from 'react';
import Book from "../Representational/Book";
import book from "../../assets/book";

const BookList = (props,index) => {
    return (
            props.books.map((books)=>{
            return (
            <Book bookName={books.bookName} writter={books.writter} deletebook={()=>props.deletebook(index)}
                  selectBookHandler={()=>props.selectBookHandler(books.id)} key={books.id}/>
            )
        })

    );
};

export default BookList;
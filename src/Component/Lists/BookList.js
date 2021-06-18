import React from 'react';
import Book from "../Representational/Book";

const BookList = (props) => {
    return (
            props.books.map((books,index)=>{
            return (
            <Book bookName={books.bookName} writter={books.writter} selectBookHandler={()=>props.selectBookHandler(books.id)} key={index}/>
            )
        })

    );
};

export default BookList;
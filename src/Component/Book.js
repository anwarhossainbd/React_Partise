import React from 'react';
import "../Stylesheets/Book.css"

const Book = (props) => {
    return (
        <div className="Book">
            <h3>Book: {props.bookName}</h3>
            <h4>Writer: {props.writter}</h4>

            <input type="text" onChange={props.inputName} value={props.bookName}/> <br /> <br />

            <button onClick={props.delete}>Delete</button>


        </div>
    );
};

export default Book;
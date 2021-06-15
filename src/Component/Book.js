import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h3>Book: {props.bookName}</h3>
            <h4>Writer: {props.writter}</h4>

            <input type="text" onChange={props.inputName} value={props.bookName}/> <br /> <br />

            <button onClick={props.change}>Change</button>
        </div>
    );
};

export default Book;
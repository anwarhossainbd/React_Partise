import React from 'react';
import "../../Stylesheets/Book.css"
import {NavLink} from "react-router-dom";

const Book = (props) => {
    return (
        <div className="Book" onClick={props.selectBookHandler}>
            <h3>Book: {props.bookName}</h3>
            <h4>Writer: {props.writter}</h4>
            <NavLink to={"/newBook/" + props.bookName}> <button>Details</button> </NavLink> <br/>  <br/>
            <button onClick={props.deletebook}>Delete</button>




        </div>
    );
};

export default Book;
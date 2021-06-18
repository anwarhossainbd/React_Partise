import React from 'react';

const BookDetails = (props) => {



    if (props.bookdetails===null){
       return  <div></div>
    }

    return (
        <div>

            {/*<h1>{props.bookdetails.bookName}</h1>*/}
            {/*<h1>{props.bookdetails.writter}</h1>*/}

        </div>
    );
};

export default BookDetails;
import React, { Component } from 'react';

/**
 * [react-redux]: it is for wiring up between react and redux.
 * 
 * 
 */


/* (No in-transit between react and redux so far here. -----------------------------------------------------------*/ 
//  In order for the in-transit connection, "container" is going te be used, instead of a compnent. 
//  "container" is for the connection to management of "state" of redux.
//  Without connection to redux, the component is called "dumb component."
//  Therefore, here is thing.
//    - There are two kinds of components.
//      . "container" : smart component that is directly controlling "state" of value.
//                   a container is entire application's part application or module itself that manages and manipulates value accociated with a cerntain part.
//
//      . "normal coponent or dumb component" : it is just rendering for the view.
//                   It is not related to value management (For instance, the most parent component.)

export default class BookList extends Component {

    renderList() {
        
        // this.props.books is object values of key "books" that will be delivered.
        // Then, make a list of book "title" a key that is (mapped or included in "books")
        // Finally, it is drawing out "book.title". which is a key of the object.
        return this.props.books.map ((book) => {
            
            <li key={book.title} className = 'list-group-item'>{book.title}
            </li>

        });
    }

    render () {

        // render renderList() function.
        return (
        
        <ul className = 'list-group col-sm-4'>

            {this.renderList()}

        </ul> 

        );

/* -----------------------------------------------------------*/ 
    }
}
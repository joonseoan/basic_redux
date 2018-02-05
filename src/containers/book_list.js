import React, { Component } from 'react';

import { connect } from 'react-redux';

// import selectBook
import { selectBook } from '../actions/index'; 

// import bindActionCreators
import { bindActionCreators } from 'redux';


/**
 * [react-redux]: it is for wiring up between react and redux.
 */

 

/* 
    "components & containers" are used to render the state to Views
    
      . "container" : smart component that is directly controlling "state" of value.
                      a container is entire application's part application or module itself that manages and manipulates value accociated with a cerntain part.
                      it is a parnent components  
                    
                      (No in-transit between react and redux so far here. -----------------------------------------------------------*
                      In order for the in-transit connection, "container" is going te be used, instead of a compnent. 
                      "container" is for the connection to management of "state" of redux.
                       Without connection to redux, the component is called "dumb component."

      . "normal coponent or dumb component" : it is just rendering for the view.
                   It is not related to value management (For i

*/


// a connecting component between react and redux does export a connect component
// connect (mapStateToProps...mapDispatchToProps) 
class BookList extends Component {



    renderList() {
        
        // this.props.books is object values of key "books" that is delivered from reducer.
        // Then, make a list of book "title" a key that is (mapped or included in "books")
        // Finally, it is drawing out "book.title". which is a key of the object.
        

        return this.props.books.map ((book) => {
            
            return (
                
                <li
                     key={book.title}
                     onClick = {() => this.props.selectBook(book)}
                     className = 'list-group-item'>
                     {book.title}
                </li>
            
            );

        });
    }

    render () {

        // console.log(this.props.asdf) // ==> '123

        // render renderList() function.
        return (
        
        <ul className = 'list-group col-sm-4'>

           {this.renderList()}

        </ul> 

        );

/* -----------------------------------------------------------*/ 
    }
}


// state includes an array of books and active books
function mapStateToProps (state) {
    // Whatever is returned will show up as props
    // inside of bookList
    // it can show the defined BookList as it is
    // or otherwise, can manipulate the defined BookList the programeer wants show.
    return ({

        // For instance : // asdf: '123' // shows up in render()

        // it is from reducers of redux. 
        // because index.js (combineReducers) in "reducers" foleder is a reduxt component.
        // smart containers connectes react and redux
        books: state.books

    });

}

// Anything returned from this function will end up as props
// on the BookList container.
function mapDispatchToProps (dispatch) {

    // the second select book is a selectBook imported at the top
    // Whenever selecBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators( { selectBook : selectBook }, dispatch);

}


// export here in smart component.
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 


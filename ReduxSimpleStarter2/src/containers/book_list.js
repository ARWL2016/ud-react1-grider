import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //this func makes actions flow to reducers

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={ () => this.props.selectBook(book) }
                    className="list-group-item">{book.title}</li>
            );
        }); 
    }

    render() {
        return (
            <ul className="list-group col-sm-4"> 
                {this.renderList()}
            </ul>
        )
    }
} 

function mapStateToProps(state) {
    //maps redux application state to Booklist props
    return {
        books: state.books
    }; 
}  

// Anything returned from this function will be a prop on BookList container  
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called (this.props.selectBook) the selectBook 
    // action creator will be invoked and the result passed to all reducers.  
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Connects the two functions (one for inputting state, one for outputting actions)
// to the component, making it a container  
export default connect(mapStateToProps, mapDispatchToProps)(BookList);          
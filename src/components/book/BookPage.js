import React from 'react';
import { connect } from 'react-redux';
// import StyleSheet from 'react-style';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
    constructor(props){
        super(props);
    }

    // handler
    submitBook(input){
        this.props.createBook(input);
    }

    render(){
        let titleInput;

        // retorn JSX
        return (
            <div>
                <h3>Books</h3>

                <ul>
                    {this.props.books.map((b, i) =>
                        <li key={i}>
                            <p>Title: {b.title}</p>
                            <p>Author: {b.author}</p>
                            <p>Price: {b.price}</p>
                            <p>Year: {b.registered}</p>
                        </li>
                        )}
                </ul>

                <div>
                    <h3>Book Form</h3>

                    <form onSubmit={e => {
                        e.preventDefault();

                        var input = {title: titleInput.value};

                        this.submitBook(input);

                        e.target.reset();
                    }}>
                        <input type="text" name="title" ref={node => titleInput = node}/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

// const style = StyleSheet.create({
//     item: {
//         display: 'flex',
//
//     }
// });

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: book => dispatch(bookActions.createBook(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

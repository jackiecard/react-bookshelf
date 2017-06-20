import Axios from 'axios';
import database from '../firebase';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books
    }
};

export const createBookSuccess = (book) => {
    return {
        type: 'CREATE_BOOK_SUCCESS',
        book
    }
}

export const fetchBooks = () => {
    return (dispatch) => {
        return database.ref('/').once('value', response => {
            const bookList = response.val();
            dispatch(fetchBooksSuccess(bookList))
        })
        .catch((error) => {
            throw(error)
        })
    }
    // return (dispatch) => {
    //     return Axios.get(apiUrl)
    //         .then(response => {
    //             dispatch(fetchBooksSuccess(response.data))
    //         })
    //         .catch(error =>{
    //             throw(error)
    //         });
    // }
}

export const createBook = (book) => {
    return (dispatch) => {
        return Axios.post(apiUrl, book)
            .then(response => {
                dispatch(createBookSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

// export const createBook = (book) =>{
//     return {
//         type: 'CREATE_BOOK',
//         book: book
//     }
// };

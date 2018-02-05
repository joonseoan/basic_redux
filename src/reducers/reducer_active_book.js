// State argument is not application state, only the state
// this reducer is responsible for

export default function(state = null, action) {

    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }

    // when the app does not do action, it is the current state.
    return state;

}
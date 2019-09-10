import { Affiche_USERS, Affiche_POSTS, Affiche_COMMENTS } from './actionReducer/type';

const initialState = {
    users: [],
    posts: [],
    comments: [] 
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Affiche_USERS:
            return {
                ...state,
                users: action.payload
            }
        case Affiche_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case Affiche_COMMENTS:
            return {
                ...state,
                comments: action.payload
            } 
        default:
            return state;
    }
}
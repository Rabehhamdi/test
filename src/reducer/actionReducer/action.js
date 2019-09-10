import { Affiche_USERS, Affiche_POSTS, Affiche_COMMENTS } from './type';

export const affiche_USERS= () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: Affiche_USERS,
            payload: users
        }));
}


export const affiche_POSTS = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: Affiche_POSTS,
            payload: posts
        }));
}

export const affiche_COMMENTS = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(comments => dispatch({
            type: Affiche_COMMENTS,
            payload: comments
        }));
} 
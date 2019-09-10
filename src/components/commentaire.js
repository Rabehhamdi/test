import React, { Component } from 'react'
import {connect} from 'react-redux'
import { affiche_COMMENTS } from '../reducer/actionReducer/action';
import Post from '../ItemPost'
import ItemCommentaire from './ItemCommentaire'
class Commentaire extends Component {
    componentDidMount() {
        this.props.affiche_COMMENTS()
    }
    render() {
        const postComments = this.props.comments.filter(el => String(el.postId) === this.props.id)
        return (
            <div>
                <h1>{this.props.name}</h1> 
                {
                    this.props.posts.filter(el => String(el.id) === this.props.id).map((el, index) => <Post Post={el} key={index} />)
                }
                <hr /><hr /><br />
                {
                    postComments.map((el, index) => <ItemCommentaire key={index} el={el} />)
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    comments: state.users.comments,
    posts: state.users.posts
})
export default connect(mapStateToProps, { affiche_COMMENTS })(Commentaire)
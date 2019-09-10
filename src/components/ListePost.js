import React, { Component } from 'react'
import { connect } from 'react-redux';
import { affiche_POSTS } from '../reducer/actionReducer/action';
import ItemPost from '../ItemPost'

class Posts extends Component {
    componentDidMount() {
        this.props.affiche_POSTS()
    }

    render() {
        const Liste_Poste = this.props.posts.filter(el => String(el.userId) === this.props.id)
        return (
            <div className="all-posts"> 
                <h1 className="users-post">All Posts Of <span>{this.props.name}</span>:</h1>
                {
                    Liste_Poste.map((post, index) => <ItemPost name={this.props.name}   Post={post} key={index} />)
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    posts: state.users.posts
})
export default connect(mapStateToProps, { affiche_POSTS })(Posts)
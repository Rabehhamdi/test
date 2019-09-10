import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ItemPost extends Component {
    render() {
        return (
            <div> 
                <div class="container"> 
                    <div class="row"> 
                        <div class="col-md-8">  
                            <div class="card mb-4">
                                <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
                                <div class="card-body">
                                    <h2 class="card-title">{this.props.Post.title}</h2>
                                    <p class="card-text">{this.props.Post.body}</p>
                                </div>
                                <Link to={`/commentaire/${this.props.name}/${this.props.Post.id}`} >
                                    <div class="card-footer text-muted">
                                        <a href="#">commentaire</a>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

import React, { Component } from 'react' 
import { Link } from 'react-router-dom';
export default class ItemUser extends Component { 
    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="col-xs-6 col-sm-4 col-md-8">
                        <div class="well well-sm">
                            <div class="row">
                                <div class="col-sm-6 col-md-4">
                                    <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
                                </div>
                                <div class="col-sm-6 col-md-8">
                                    <h4>{this.props.infos.name}</h4>
                                    <h4>{this.props.infos.username}</h4>
                                    <small><cite title="San Francisco, USA">{this.props.infos.address.street},{this.props.infos.address.suite},{this.props.infos.address.zipcode}  <i class="glyphicon glyphicon-map-marker">
                                    </i></cite></small>
                                    <p>
                                        <i class="glyphicon glyphicon-envelope"></i>{this.props.infos.email}
                            <br />
                                        <i class="glyphicon glyphicon-globe"></i><a href="http://www.jquery2dotnet.com">{this.props.infos.website}</a>
                                        <br />
                                         </p> 
                        <div class="btn-group">
                                        <Link to={`/ListedePost/${this.props.infos.username}/${this.props.infos.id}`}>
                                            <button type="button" class="btn btn-primary">Social</button>
                                        </Link>
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

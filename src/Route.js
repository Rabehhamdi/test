import React, { Component } from 'react' 
import { Route } from 'react-router-dom' 
import ListeUser from "./components/ListeUser"
import ListePost from './components/ListePost'
import Commentaire from './components/commentaire'
export default class route extends Component { 
    constructor(props) {
        super(props)
    } 
    render() {
        return (
            <div>
                <Route exact path="/" component={ListeUser} />
                <Route exact path="/ListedePost/:name/:id" render={(props) => <ListePost name={props.match.params.name} id={props.match.params.id} />} />
                <Route exact path="/commentaire/:name/:id" render={(props) => <Commentaire name={props.match.params.name} id={props.match.params.id} />} />

            </div>
        )
    }
}

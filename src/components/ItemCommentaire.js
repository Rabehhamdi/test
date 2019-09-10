import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <br />
                <h1>name   :{this.props.el.name}</h1>
                <h1>Email  :{this.props.el.email}</h1>
                <h1>Comment: </h1><p> {this.props.el.body}</p>
                <hr /><hr /><br/>
            </div>
        )
    }
}

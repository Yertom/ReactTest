import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h3>Name: {this.props.commentInfo.name}</h3>
            <h4>Email: {this.props.commentInfo.email}</h4>
            <p>{this.props.commentInfo.body}</p>
            <hr/>
        </div>)
    }
}

export default Comment;
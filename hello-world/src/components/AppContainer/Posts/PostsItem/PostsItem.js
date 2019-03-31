import React, {Component} from 'react';
import CommentSection from '../../CommentSection/CommentSection';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class PostsItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={`/user/${this.props.postInfo.userId}/post/${this.props.postInfo.id}/comments`}><h1>{this.props.postInfo.title}</h1></Link>
                <p>{this.props.postInfo.body}</p>
            </div>
        )
    }
}


export default PostsItem;
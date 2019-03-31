import React, {Component} from 'react';
import Comment from './Comment/Comment'
import {BrowserRouter, Route, Link} from 'react-router-dom';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentComments: [],
        };
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.idpost}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    currentComments: json,
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.idpost !== this.props.match.params.idpost) {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.idpost}`)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        currentComments: json,
                    })
                })
        }
    }

    render() {
        let comments = this.state.currentComments.map((item) => {
            return <Comment commentInfo={item}/>;
        });
        return (<div>
            {comments}
        </div>)
    }
}

export default CommentSection;
import React, {Component} from 'react';
import PostsItem from './PostsItem/PostsItem';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postsList: [],
            currentPost: "",
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    postsList: json,
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        postsList: json,
                    })
                })
        }
    }

    render() {
        let posts = this.state.postsList.map((item) => {
            return <PostsItem key={item.id} postInfo={item}/>
        });
        return (
            <div>
                {posts}
            </div>
        )
    }
}


export default Posts;
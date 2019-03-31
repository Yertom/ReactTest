import React, {Component} from 'react';
import UserItem from './UserItem/UsersItem';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    usersList: json,
                })
            })
    }

    render() {
        let users = this.state.usersList.map((item) => {
            return <UserItem key={item.id} userInfo={item}/>
        });
        return (
            this.state.usersList.length === 0 ? <div>Loading...</div> : <div>
                {users}
                <hr/>
            </div>
        )
    }
}

export default Users;
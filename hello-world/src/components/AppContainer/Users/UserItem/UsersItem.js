import React, {Component} from 'react';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom';

class UserItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let id = this.props.userInfo.id;
        return (
            <div>
                <Link to={`/user/${id}`}>
                    <p>
                        {this.props.userInfo.name}
                    </p>
                </Link>
            </div>
        )
    }
}

export default UserItem;
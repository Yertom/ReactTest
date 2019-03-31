import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navigation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={"/"}>Home</Link>
            </div>

        )
    }
}


export default Navigation;
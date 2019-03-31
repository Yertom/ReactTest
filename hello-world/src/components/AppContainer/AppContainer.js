import React, {Component} from 'react';
import Users from './Users/Users';
import Posts from './Posts/Posts';
import {BrowserRouter, Route} from 'react-router-dom';
import CommentSection from "./CommentSection/CommentSection";
import Navigation from "./Navigation/Navigation";

class AppContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <Route exact path={["/","/user/:id"]} component={Users}/>
                    <Route exact path={["/","/user/:id"]} component={Posts}/>
                    <Route path="/user/:id/post/:idpost/comments/" component={CommentSection}/>
                </div>
            </BrowserRouter>
        )
    }
}


export default AppContainer;
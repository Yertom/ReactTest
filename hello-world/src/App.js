import React, {Component} from 'react';
import AppContainer from './components/AppContainer/AppContainer';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppContainer/>
            </div>
        )
    }

}

export default App;

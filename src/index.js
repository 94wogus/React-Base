import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from "react-redux";

import * as serviceWorker from './serviceWorker';

import route from '@/route';
import store from '@/store';

import '@assets/style/common.css';
import '@assets/style/desktop.scss';

const App = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
            {route.map((r) => (
                <Route key={r.path} path={r.path} component={r.component} exact/>
            ))}
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
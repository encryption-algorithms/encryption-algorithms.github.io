import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import routes from './components/routes';
import SideBar from './components/common/SideBar';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <div id="wrapper">
                <SideBar/>
                <Switch>
                    {routes.map(({ component: Component, path, ...rest }) => {
                        return (
                        <Route
                            render={(props) => (
                                <React.Suspense fallback={"loading..."}>
                                    <Component {...props} />
                                </React.Suspense>
                            )}
                            path={path}
                            key={path}
                            {...rest} />
                        );
                    })}
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
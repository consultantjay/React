import React from "react";

import {render} from "react-dom";
import {App} from "./components/app";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import {Nav} from "./components/nav";



export class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav/>
                    {/* <Switch>  Dont Show*/}
                    <Route path="/app" component={App}/>
                    {/* <Route render={NotFound} />
                    </Switch> */}
                </div>
            </BrowserRouter>

        );
    }
}

render(<Index/>, document.getElementById("app"));
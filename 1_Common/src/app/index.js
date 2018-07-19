import React from "react";

import {render} from "react-dom";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import {Nav} from "./components/nav";
import {Home} from "./components/home";
import {About} from "./components/about";
import {Contact} from "./components/contact";
import { NotFound } from "./components/notfound";
import createBrowserHistory from 'history/createBrowserHistory';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Button} from './components/ButtonState'
import {EventHandle  } from "./components/EventHandle";
import {FormHandle  } from "./components/FormHandle";
import {LifeCycle  } from "./components/LifeCycle";
import {PropTypeEx  } from "./components/PropTypeEx";
import {RefElement  } from "./components/RefElement";
const history = createBrowserHistory()
export class Index extends React.Component {
 
    render() {
        return (
            <div>
        <Header/>
     
            <BrowserRouter>
                <div className="container">
                    <Nav/>
                    {/* <Switch>  Dont Show*/}
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/LifeCycle" component={LifeCycle}/>
                    <Route path="/PropTypeEx" component={PropTypeEx}/>
                    <Route path="/RefElement" component={RefElement}/>
                   <Route path="/EventHandle" component={EventHandle}/>
                    <Route path="/FormHandle" component={FormHandle}/>
                    <Route path="/State" component={Button }/>
                   
                    {/* <Route render={NotFound} />
                    </Switch> */}
                </div>
            </BrowserRouter>
           
            <Footer/>
            
            
            </div>

        );
    }
}
  
render(<Index/>, document.getElementById("app"));
import React , {Component} from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';
import Shop from './Shop';


class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Shop}/>
                    <Route  path='/shop/:shopId' component={App}/>
                    <Route  component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Router;
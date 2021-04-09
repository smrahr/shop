import React, {Component} from 'react';
import Invintory from './Invintory';
import Order from './Order';
import Header from './Header';
import samples from './samples';
import Toturial from './Toturial';


class App extends Component {
    state = {
        toturials : {},
        order : {}
    };

    addToturial = (toturial) =>{
        const toturials = {...this.state.toturials};
        toturials[`toturial${Date.now()}`] = toturial;
        this.setState(() => {
            return { toturials }
        })
    };

    loadSample = () => {
        this.setState(()=>{
            return {
                toturials : samples
            }
        })
    };

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key]+1 || 1;
        this.setState({order});
    };

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order});
    };

    updateForm = (key , updatedForm) =>{
        const toturials = {...this.state.toturials};
        toturials[key] = updatedForm;
        this.setState({toturials});
    };

    deleteToturial = (key) => {
        const toturials = {...this.state.toturials};
        delete toturials[key];
        this.setState({toturials})
    }



    render(){
        return(
            <div className='tutorials-app'>
                <div className='tutorials'>
                    <Header />
                    <ul>
                        {Object.keys(this.state.toturials).map(key => <Toturial key={key} details={this.state.toturials[key]} addToOrder={this.addToOrder} index={key}/>)}
                    </ul>
                </div>
                <Order removeFromOrder={this.removeFromOrder} toturials={this.state.toturials} order={this.state.order}/>
                <Invintory deleteToturial={this.deleteToturial} updateForm={this.updateForm} toturials={this.state.toturials} addToturial={this.addToturial} loadSample={this.loadSample}/>
                
            </div>
        )
    }
} 

export default App;
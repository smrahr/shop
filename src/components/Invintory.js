import React , { Component} from 'react';
import AddToturialForm from './AddToturialForm';
import EditToturialForm from './EditToturialForm';

class Invintory extends Component {
    render(){
        return(
            <div className='invintory'>
                <h2>Invintory</h2>
                {Object.keys(this.props.toturials).map(key => <EditToturialForm key={key} toturial={this.props.toturials[key]} updateForm={this.props.updateForm} index={key} deleteToturial={this.props.deleteToturial}/>)}
                <AddToturialForm addToturial={this.props.addToturial}/>
                <button className='load-sample' onClick={this.props.loadSample}>load sample</button>
            </div>
        )
    }
}
export default Invintory;
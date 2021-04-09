import React, {Component} from 'react';

class Toturial extends Component {
    handeClick = ()=>{
        this.props.addToOrder(this.props.index);
    }

    enter = (e) => {
        e.currentTarget.innerHTML = `new Text`;
        
    }

    leave = (e) => {
        e.currentTarget.innerHTML = this.props.details.name;
    }

    render(){
        
        const {name,image,desc,price,status} = this.props.details;
        const isAvailable = status === 'available';
        return(
            <div className='single-toturial'>
                <img src={image}/>
                <div className='details'>
                    <h2 className='tutorial-name'><span onMouseEnter={this.enter} onMouseLeave={this.leave}>{name}</span><span className='price'>{price}</span></h2>
                    <p>{desc}</p>
                    <button onClick={this.handeClick} disabled={!isAvailable} className='add-to-order'>{isAvailable? 'Add To Order' : 'Sold Out' }</button>
                </div>
            </div>
        )
    }
}
export default Toturial;
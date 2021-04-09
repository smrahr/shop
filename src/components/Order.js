import React , { Component} from 'react';

class Order extends Component {
    renderOrders = (key) => {
        const toturial = this.props.toturials[key];
        const count = this.props.order[key];
        const isAvailable = toturial && toturial.status === 'available';
        if (!isAvailable) {
            <li key={key}>
                {toturial.name ? toturial.name : ''} is no longer available.                
            </li>
        }
        return (
            <li key={key}>
                {count} toturial {toturial.name} : price : {toturial.price}
                <span onClick={() => {this.props.removeFromOrder(key)}}>&times;</span>               
            </li>
        )
    }

    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevtotal , key) =>{
            const toturial = this.props.toturials[key];
            const count = this.props.order[key];
            const isAvailable = toturial && toturial.status === 'available';
            if (isAvailable) {
                return prevtotal + (toturial.price * count);
            } 
            return prevtotal;
        },0)
        
        return(
            <div className='order'>
                <h2>Order</h2>
                <ul>
                    {orderIds.map(this.renderOrders)}
                </ul>
                <div className='total'>
                    total price : {total}
                </div>
            </div>
        )
    }
}
export default Order;
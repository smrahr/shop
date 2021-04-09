import React, {Component} from 'react';

class Shop extends Component {
    myInput = React.createRef();
    goToShop = (e) => {
        console.log(this.props);
        e.preventDefault();
        const urlPath = this.myInput.current.value;
        this.props.history.push('/shop/urlPath')



    }
        render(){
        return(
            <form className='shop-from' onSubmit={this.goToShop}>
                <h2>Enter Shop Name</h2>
                <input required ref={this.myInput} type='text' placeholder='Shop Name'/>
                <button>Visit Shop</button>
            </form>
        )
    }
}
export default Shop;

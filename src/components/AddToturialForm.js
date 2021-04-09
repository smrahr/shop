import React , { Component } from 'react';

class AddToturialForm extends Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createtutorial = (e) => {
        e.preventDefault();
        const toturial = {
            name : this.nameRef.current.value ,
            price : this.priceRef.current.value ,
            status : this.statusRef.current.value ,
            desc : this.descRef.current.value ,
            image : this.imageRef.current.value ,
        }
        this.props.addToturial(toturial);
        e.currentTarget.reset();
    }

    render(){
        return(
            <form className='add-toturial-form' onSubmit={this.createtutorial}>
                <input ref={this.nameRef} name='name' type='text' placeholder='name'/>
                <input ref={this.priceRef} name='price' type='text' placeholder='price'/>
                <select ref={this.statusRef} name='status'>
                    <option value='available'>available</option>
                    <option value='unavailable'>unavailable</option>
                </select>
                <textarea ref={this.descRef} name='desc' placeholder='describe'></textarea>
                <input ref={this.imageRef} name='image' type='text' placeholder='image'/>
                <button className='create-tutorial'>create Tutorial</button>
            </form>
        )
    }
}
export default AddToturialForm;
import React, { Component } from 'react'

class EditToturialForm extends Component {
    handleChange = (e) =>{
        const updatedForm = {...this.props.toturial}
        updatedForm[e.currentTarget.name] = e.currentTarget.value;
        this.props.updateForm(this.props.index , updatedForm);
    }

    changePic = (e) =>{
        const updatedForm = {...this.props.toturial}
        updatedForm[e.currentTarget.name] = `/images/${e.currentTarget.files[0].name}`;
        this.props.updateForm(this.props.index , updatedForm);
        e.currentTarget.previousSibling.value = `/images/${e.currentTarget.files[0].name}`;
        
    }

    render() {
        return (
            <form className='add-toturial-form' onSubmit={this.createtutorial}>
                <input onChange={this.handleChange} name='name' type='text' placeholder='name' defaultValue={this.props.toturial.name}/>
                <input onChange={this.handleChange} name='price' type='text' placeholder='price' defaultValue={this.props.toturial.price}/>
                <select onChange={this.handleChange} name='status' defaultValue={this.props.toturial.status}>
                    <option value='available'>available</option>
                    <option value='unavailable'>unavailable</option>
                </select>
                <textarea onChange={this.handleChange} name='desc' placeholder='describe' defaultValue={this.props.toturial.desc}></textarea>
                <input onChange={this.handleChange} name='image' type='text' placeholder='image' defaultValue={this.props.toturial.image}/>
                <input type='file' name='image' onChange={this.changePic} />
                <button onClick={()=>{this.props.deleteToturial(this.props.index)}}>delete toturial</button>
            </form>
        )
    }
}
export default EditToturialForm;

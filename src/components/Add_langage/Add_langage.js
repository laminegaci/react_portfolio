import React, { Component } from 'react';

class Add_langage extends Component {
    state = {
        name : "",
        niveau : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addLangage(this.state)
         
    }
   
    render(){
        return(
            <div className="inputs">
            <form onSubmit={this.handleSubmit}>
                <input className="input-name" type="text" placeholder="name" id="name" onChange={this.handleChange} /> 
                <input className="input-niveau" type="text" placeholder="niveau" id="niveau" onChange={this.handleChange} /> 
                <input className="input-action" type="submit" value="add" /> 
            </form>
            </div>
        );
    }
}

export default Add_langage;
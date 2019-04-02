import React, { Component } from 'react';

class Field extends Component {
    
        state = {
            name: "",
            description: ""
        }

        setName = (e) => {
            this.setState({
                name: e.target.value
            })
            console.log("1",this.state);
        }
        setDesc = (e) => {
            this.setState({
                description: e.target.value
            })
            console.log("2",this.state);
    }
    render() {
        const { type, title } = this.props;
        return (
            <React.Fragment>
                {type !== 'submit' && <label htmlFor="name">{title}: </label>}
                {type === 'text' && <input type="text" name="name" onBlur={this.setName} />}
                {type === 'textarea' && <textarea rows="5" name="description" cols="30" onBlur={this.setDesc} />}
                {type === 'submit' && <input type="submit" name="submit" value="Submit" />}
            </React.Fragment>
        )
    }
}

export default Field;
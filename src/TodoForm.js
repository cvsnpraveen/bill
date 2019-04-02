import React, { Component } from 'react';
import Field from './Field';
class TodoForm extends Component {
    render() {
        return (
            <div className="form_container">
                <Field type="text" title="Name"/>
                <Field type="textarea" title="Description"/>
                <Field type="submit"/>
            </div>
        )
    }
}

export default TodoForm;
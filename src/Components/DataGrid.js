import React from 'react';
import axios from 'axios';

class DataGrid extends React.Component {
    constructor(){
        super();
        this.state = {
            data: [],
            bill: []
        }
    }
    componentDidMount(){
        axios.get('./files/data.json')
        .then((res)=>this.setState({data: res.data}));
    }
    render() {
        const data = this.state.data;
        return (
            <table className="table table-bordered">
                <thead>
                    <tr className="info">
                        <th>S.No</th>
                        <th>&nbsp;</th>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Denomination</th>
                        <th>Month Paid Upto</th>
                        <th>No of Installments</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data&&
                    data.map((item, i)=>
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td><input type="checkbox" value={item} name="" /></td>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.denomination}</td>
                        <td>{item.paidUpto}</td>
                        <td>{item.instal}</td>
                        <td>{item.dueDate}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

export default DataGrid;
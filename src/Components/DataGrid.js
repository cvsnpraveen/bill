import React from 'react';

class DataGrid extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <form>
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
                        {data &&
                            data.map((item, i) =>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td><input type="checkbox" checked={item.choosen} name={i} onChange={(e) => this.props.onChange(e, "check")} /></td>
                                    <td className="text-left">{item.name}</td>
                                    <td>{item.number}</td>
                                    <td>{item.denomination}</td>
                                    <td>{item.paidUpto}</td>
                                    <td><input type="text" value={item.installment} disabled name={i} id={item.number} onChange={(e) => this.props.onChange(e, "text")} /></td>
                                    <td>{item.dueDate}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </form>
        )
    }
}

export default DataGrid;

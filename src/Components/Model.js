import React from 'react';

class Model extends React.Component {
    render() {
        const data = this.props.data && this.props.data.filter((item, index)=> item.choosen === true);
        return (
            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">RECURRING DEPOSIT INSTALLMENT REPORT</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <table className="table model table-bordered">
                                <thead>
                                    <tr className="info">
                                        <th>S.No</th>
                                        <th>Ac. Number</th>
                                        <th>Account Name</th>
                                        <th>Denomination</th>
                                        <th>Total Deposit </th>
                                        <th>No of Instl..</th>
                                        <th>Default fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data &&
                                        data.map((item, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{item.number}</td>
                                                <td className="text-left">{item.name}</td>
                                                <td>{item.denomination}</td>
                                                <td>{item.denomination}</td>
                                                <td>{item.installment}</td>
                                                <td>0</td>
                                            </tr>
                                        )}
                                            <tr>
                                                <td colSpan="4">Total Deposit Amount</td>
                                                <td colSpan="3">&nbsp;</td>
                                            </tr>

                                </tbody>
                            </table>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Model;

import React from 'react';

class Nav extends React.Component {
    parseNumber = (num) => {
        return parseFloat(num.replace(/,| CR./gi, ''));
    }
    render() {
        const state_data = this.props.data,
            count = state_data && state_data.filter((obj) => obj.choosen === true).length,
            total = state_data && state_data.reduce((a, b) => {
                return (b.choosen === true) ? a + (this.parseNumber(b.denomination) * b.installment) : a;
            }, 0);

        console.log("count=>", count);
        console.log("total=>", total);

        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Postal Billing</a>
                    </div>
                    {/* <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Page 2</a></li>
                    </ul> */}
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-edit"></span> No of Ac's: {count}</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-edit"></span> Total Amount: {total}</a></li>
                        <li><button className={"btn btn-danger navbar-btn"+ ((count<1)? " invisible":"")}  data-toggle="modal" data-target="#myModal"> Preview Bill</button></li>
                    </ul>
                    {total&& total>20000&& window.alert("Bill amount Exceeds Rs. 20000/- ")}
                </div>
            </nav>
        )
    }
}

export default Nav;

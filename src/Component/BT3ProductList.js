import React, { Component } from 'react';
import BT3Product from './BT3Product';

class BT3ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-3">
                    <BT3Product/>
                </div>
                <div className="col-3">
                    <BT3Product/>
                </div>
                <div className="col-3">
                    <BT3Product/>
                </div>
                <div className="col-3">
                    <BT3Product/>
                </div>
                </div>
            </div>
        );
    }
}

export default BT3ProductList;
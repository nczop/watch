import React, { Component } from "react";


class Product extends Component {

    state= {
        products: this.props.products
    }

    displyProduct = () => {
        return (
            <div>{this.props.name}</div> 
        )       
    }

    handleButton = () => {
        this.props.find(this.props.id)
    }


    render() {
        return (
            <>
                <ul>
                    <li>
                        {this.displyProduct()}
                        <button onClick={this.handleButton}>usun</button>
                    </li>
                </ul>
            </>)
    }
}

export default Product;
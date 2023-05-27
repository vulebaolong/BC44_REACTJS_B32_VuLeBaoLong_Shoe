import React, { Component } from "react";
import ListShoe from "./ListShoe/ListShoe";
import DetailShoe from "./DetailShoe/DetailShoe";
import CartShoe from "./CartShoe/CartShoe";
import { shoeArr } from "./data";

export default class Shoe extends Component {
    state = {
        shoeArr,
        detailShoe: shoeArr[0],
        cart: [],
    };
    handleViewDetail = (shoe) => {
        this.setState({
            detailShoe: shoe,
        });
    };

    handleAddToCart = (shoe) => {
        // item
        const itemShoe = { ...shoe, num: 1 };

        //clone cart
        const cloneCart = [...this.state.cart];

        const index = cloneCart.findIndex((item) => {
            return item.name === itemShoe.name;
        });

        //1 nếu trùng
        if (index !== -1) {
            cloneCart[index].num++;
            this.setState({
                cart: cloneCart,
            });
            return;
        }

        //2 trùng
        cloneCart.push(itemShoe);
        this.setState({
            cart: cloneCart,
        });
    };

    handleDeleteCart = (shoe) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex((item) => {
            return item.name === shoe.name;
        });
        cloneCart.splice(index, 1);
        this.setState({
            cart: cloneCart,
        });
    };

    handleChangeNum = (shoe, option) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex((item) => {
            return item.name === shoe.name;
        });
        cloneCart[index].num += option;
        if (cloneCart[index].num === 0) {
            cloneCart.splice(index, 1);
        }
        this.setState({
            cart: cloneCart,
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row py-5">
                    <div className="col-8 ">
                        <ListShoe
                            shoeArr={this.state.shoeArr}
                            handleViewDetail={this.handleViewDetail}
                            handleAddToCart={this.handleAddToCart}
                        />
                    </div>
                    <div
                        className="col-4 d-flex flex-column gap-2 "
                        style={{ height: "80vh" }}
                    >
                        <DetailShoe detailShoe={this.state.detailShoe} />
                        <CartShoe
                            cart={this.state.cart}
                            handleDeleteCart={this.handleDeleteCart}
                            handleChangeNum={this.handleChangeNum}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

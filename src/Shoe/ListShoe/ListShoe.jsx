import React, { Component } from "react";
import ItemShoe from "./ItemShoe/ItemShoe";

export default class ListShoe extends Component {
    render() {
        const { shoeArr, handleViewDetail, handleAddToCart } = this.props;
        return (
            <div
                className="list_shoe d-flex flex-column p-3 border rounded-4"
                style={{ height: "80vh" }}
            >
                <h2 className="mb-5">Danh sách sản phẩm</h2>
                <div className="row row-gap-3 overflow-y-auto">
                    {shoeArr.map((shoe) => {
                        return (
                            <ItemShoe
                                key={shoe.id}
                                shoe={shoe}
                                handleViewDetail={handleViewDetail}
                                handleAddToCart={handleAddToCart}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

import React, { Component } from "react";

export default class ItemCartShoe extends Component {
    render() {
        const { shoe } = this.props;
        return (
            <div className="d-flex gap-2  border rounded-2 p-2 ">
                <div className="border rounded-2" style={{ width: "20%" }}>
                    <img
                        src={shoe.image}
                        className=""
                        alt={shoe.name}
                        style={{ width: "100%" }}
                    />
                </div>
                <div>
                    <div className="d-flex gap-2">
                        <h5>{shoe.name}</h5>
                        <span className="">{shoe.price}</span>
                        <span>₫</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <button className="btn btn-success">
                                <i className="w-5 fa-solid fa-minus" />
                            </button>
                            <p className="m-0">3</p>
                            <button className="btn btn-success">
                                <i className="w-5 fa-solid fa-plus" />
                            </button>
                        </div>
                        <div className="">
                            <button className="btn btn-success">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

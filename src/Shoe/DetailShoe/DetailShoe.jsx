import React, { Component } from "react";

export default class DetailShoe extends Component {
    render() {
        const { detailShoe } = this.props;
        return (
            <div className="border rounded-4 p-3">
                <h2>Thông tin chi tiết</h2>
                <div className="">
                    <div className="">
                        <span className="fw-bold">Tên: </span>
                        <span>{detailShoe.name}</span>
                    </div>
                    <div className="">
                        <span className="fw-bold">Giá: </span>
                        <span>{detailShoe.price}</span>
                    </div>
                    <div className="">
                        <span className="fw-bold">Mô tả: </span>
                        <span>{detailShoe.description}</span>
                    </div>
                    <div className="">
                        <span className="fw-bold">Số lượng: </span>
                        <span>{detailShoe.quantity}</span>
                    </div>
                    <div className="">
                        <span className="fw-bold">Hình ảnh:</span>
                        <div className="mx-auto" style={{ width: "50%" }}>
                            <img
                                src={detailShoe.image}
                                alt={detailShoe.name}
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

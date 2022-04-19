import React from "react";
import { Col } from 'react-bootstrap'

export default function Card(props) {

    return (
        <>
            <Col md={3} xs={6}>
                <div className="card-container" onClick={() => { console.log("MODAL IS WORKING !!!") }}>
                    <div className="card-container-basket">
                        <img src="images/basket_icon.png" />
                        <p>Сагслах</p>
                    </div>
                    <div className="card" style={{ borderRadius: "20px", border: "none" }}>
                        <div className="card-img-container" style={{ position: "relative" }}>
                            <p className={props.discount > 0 ? "card-price-discount-top-right" : "card-price-discount-top-right-none"}>{props.discount > 0 ? `${props.discount}%` : null}</p>
                            <img src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${props.img}`} alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">{props.name}</div>
                            <div className="card-text">
                                <p className="card-text-price">
                                    {props.discount > 0 ? `${props.price * (1 - props.discount / 100)}₮` : `${props.price}₮`}
                                </p>

                                <p className="card-text-price-discount">
                                    {props.discount > 0 ? `${props.price}₮` : ''}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}


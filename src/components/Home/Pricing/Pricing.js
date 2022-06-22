import React from "react";
import './Pricing.css';
import Data from '../../../Data';
import { Button } from "react-bootstrap";

const Pricing = () => {

    const ItemPricing = Data.pricing.map((itembox) => {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="box">
                    <li className="title">{itembox.title}</li>
                    <li className="price">{itembox.Price}</li>
                    <li className="time">{itembox.time}</li>
                    <hr className="aftar" />
                    <li className="band">Bandwidht : <span>{itembox.Bandwidht}</span></li>
                    <li>Onlinespace : <span>{itembox.Onlinespace}</span></li>
                    <li>Support : <span>{itembox.Support}</span></li>
                    <li>Domain : <span>{itembox.Domain}</span></li>
                    <li>Hidden Fees : <span>{itembox.HeddinFees}</span></li>
                    <Button>Join Now</Button>
                </div>
            </div>
        );
    })
    return (
        <div className="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>our pricing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore molestias<br />
                            ex doloremque nesciunt repudiandae cupiditate!</p>
                    </div>
                    <div className="row">
                        {ItemPricing}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;
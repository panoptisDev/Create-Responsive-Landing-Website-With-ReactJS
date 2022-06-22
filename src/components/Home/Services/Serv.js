import React from "react";
import '../../Home/Services/Serv.css'
import Data from "../../../Data";
import Servitem from "./Servitem";
import { Button } from 'react-bootstrap';
import Img from './img/about-us.jpg';

const Srev = () => {
    const item = Data.Services.map((itembox) => {
        return (
            <div className="col-md-4">
                <Servitem title={itembox.title} text={itembox.text} icon={itembox.icon} />
            </div>
        );
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>our services</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore molestias<br />
                        ex doloremque nesciunt repudiandae cupiditate!</p>
                </div>
                <div className="row">
                    {item}
                </div>
            </div>
            <div className="row last">
                <div className="col-md-6">
                    <h3>A Digital Web Design Studio Creating Modren & Engaging Online Experiences</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita sunt, rem distinctio suscipit alias animi quisquam ipsum quia. Earum
                        quod exercitationemdoloremque fuga aliquid recusandae optio natus</p>
                    <ul>
                        <li>Expedita sunt, rem distinctio</li>
                        <li>Expedita sunt, rem  </li>
                        <li>harum, assumenda cupiditate</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                    <Button>Learn More</Button>
                </div>
                <div className="col-md-6">
                    <img src={Img} title="IMG" />
                </div>
            </div>
        </div>
    );
}
export default Srev;
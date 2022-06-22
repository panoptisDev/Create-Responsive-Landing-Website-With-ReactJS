import React from "react";
import { Button } from "react-bootstrap";
import '../Banner/Banner.css'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="col">
                    <div className="row"></div>
                    <h3>Bulid Your Dream Website Today</h3>
                    <p>Lorem ipsum, dolor sit consectetur adipisicing
                        elit. Exercitationem dicta tenetur error eveniet<br /> rerum mollitia fugit.
                        Recusandae officiis quaerat accusamus</p>
                    <Button>View Plan & Pricing</Button>
                </div>
            </div>
        </section>
    );
}
export default Banner;
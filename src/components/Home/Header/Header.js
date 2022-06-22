import React from "react";
import '../../Home/Header/Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="info">
                    <h1>we help startups launch their product</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente eaque molestias eum consequuntur necessitatibus
                        magni molestiae
                    </p>
                    <form>
                        <input type="email" placeholder="Email"></input>
                        <button type="submit">subscribe</button>
                    </form>
                </div>
            </div>
        </header >
    )
};
export default Header;
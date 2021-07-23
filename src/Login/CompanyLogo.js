import React from 'react';
import "./LoginPage.css";
import SemiCircle from "../ImageStock/Ellipse50.svg";
import PinkCircle from "../ImageStock/Ellipse69.svg";
import YellowCircle from "../ImageStock/Ellipse70.svg";

const CompanyLogo = () => {
    return (
        <>
            <div className="logo_and_name">
                <img src={SemiCircle} alt="Purple_Logo" id="Purple_logo" />
                <img src={PinkCircle} alt="Pink_Logo" id="Pink_logo" />
                <img src={YellowCircle} alt="Yellow_Logo" id="Yellow_logo" />

                <span id="Company">Company</span>
            </div>

        </>
    )
}

export default CompanyLogo;

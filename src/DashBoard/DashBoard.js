import React from 'react';
import "./DashBoard.css";
import { Container } from 'reactstrap';
import Logo from "../ImageStock/Iconly/Group 10091.svg";
import Wallet from "../ImageStock/Iconly/Wallet.svg";
import Work from "../ImageStock/Iconly/Work.svg";
import Profile from "../ImageStock/Iconly/Profile.svg";
import Dash from "../ImageStock/Iconly/Category.svg";
import {BrowserRouter as Router,Route,Redirect, NavLink} from "react-router-dom";
import DashBoardProfile from "./DashBoardProfile";
import Performance from "./Performance";
import OnlyProfile from "./OnlyProfile";
import EarningSats from "./EarningSats";
import Swal from 'sweetalert2'

const DashBoard = () => {

    const information=()=>{

        Swal.fire({
            icon: 'warning',
            title: 'Sorry',
            text: 'Due to less time, this page is incomplete ! ',
        })
    }

    return (
        <>
            <Container fluid className="DashBoard"  onLoadCapture={information} >
                <Router>
                <div className="verticalbar">
                    <img src={Logo} alt="CompanyLogo" id="LogoImage" />
                   
                    <ul id="MenuList">
                        <NavLink  style={{textDecoration:"none"}} tag="a" to="/" action exact activeClassName="active_class" ><li title="DashBoard"><img src={Dash} alt="Dash"/>DashBoard</li></NavLink >
                        <NavLink style={{textDecoration:"none"}} tag="a" to="/DashBoard/Performance" action  exact activeClassName="active_class" ><li title="Performance"><img src={Work} alt="Work" />Performance</li></NavLink >
                        <NavLink style={{textDecoration:"none"}} tag="a" to="/DashBoard/EarningStats" action  exact activeClassName="active_class" ><li title="Earning"><img src={Wallet} alt="Wallet" />Earning</li></NavLink >
                        <NavLink  style={{textDecoration:"none"}}tag="a" to="/DashBoard/OnlyProfile" action  exact activeClassName="active_class" ><li title="Profile"><img src={Profile} alt="Profile" />Profile</li></NavLink >
                    </ul>


                </div>
                <div className="Navbar">
                   
                </div>

                <div className="dashboard_content_box">
                    
                        <Route path="/" component={DashBoardProfile} exact />
                        <Route path="/DashBoard/OnlyProfile" component={OnlyProfile} exact />
                        <Route path="/DashBoard/EarningStats" component={EarningSats} exact />
                        <Route path="/DashBoard/Performance" component={Performance} exact />
                        <Redirect path="/DashBoard/DashBoardProfile"/>
                    
                </div>

                </Router>
            </Container>
        </>
    )
}

export default DashBoard

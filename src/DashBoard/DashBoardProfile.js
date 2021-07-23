import React from 'react';
import { Container,Row } from 'reactstrap';
import "./DashBoard.css";
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Facebook from "../ImageStock/Iconly/Facebook.svg";
import Twitter from "../ImageStock/Iconly/Twitter.svg";
import LinkedIn from "../ImageStock/Iconly/LinkedIn.svg";

const DashBoardProfile = () => {
    return (
        <Container className="DashBoard_Container">
            <p id="WelcomeGreet">Welcome Back, Nitisha! </p>

            
                <div id="SeePriority" >

                </div>
                <div id="NewTasks">

                </div>
                
                <div id="completetask">

                </div>

                <div id="BestPractise">

                </div>

                <div id="Rupee">

                </div>

                <div id="PointProgress">

                </div>

                <div id="LeaderBoard">

                </div>

                <div id="ContactInfo">
                    <h6 id="ContactUsText">Contact Us</h6>
                    <div id="CallPhone">
                      <CallIcon style={{color:"#9DA7BD"}}/> <span ><span> : +91 9986 756 4364 <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   020 - 27656769</span></span>
                    </div>
                    <div id="SupportSite">
                      <MailIcon style={{color:"#9DA7BD"}}/> <span >support@syllabify.com</span>
                    </div>
                    
                    <h6 style={{position:"absolute",left:"20px",bottom:"45px",}}>Follow Us On</h6>
                    <ul id="Socialmedialist">
                        <a href="https://www.facebook.com/login/web/"o target="_blank" title="Go To Facebook"><li> <img src={Facebook} alt="FB" /></li></a>
                        <a href="https://twitter.com" target="_blank" title="Go To Twitter"><li> <img src={Twitter} alt="TW" /></li></a>
                        <a href="https://in.linkedin.com" target="_blank" title="Go To LinkedIn"><li> <img src={LinkedIn} alt="LI" /></li></a>
                        
                    </ul>
                </div>


        </Container>
    )
}

export default DashBoardProfile

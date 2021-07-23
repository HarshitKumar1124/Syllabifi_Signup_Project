import React from 'react';
import "./LoginPage.css";
import { Container, Row, Col } from 'reactstrap';
import PhoneImage from "../ImageStock/Rectangle 1124Sy.svg";
import CompanyLogo from "./CompanyLogo";
import LoginForm from "./LoginForm";
import {Button} from "reactstrap";
import Googlei from "../ImageStock/Googlei.png";
import Swal from 'sweetalert2'

function LoginPage() {

    const information=()=>{

        Swal.fire({
            icon: 'info',
            title: 'Information',
            text: 'All 4 pages are linked using React Router DOM. You can either fill form or you may directly click on SIGN-UP to see next pages',
        })
    }
    return (
        <>
            <Container fluid className="Full_screen_width" onLoadCapture={information} >
               <Row className="MidContainer">
                   <img src={PhoneImage} alt="Welcome_Image" />
                   <div className="Form_Container">
                        <CompanyLogo/>            
                        <LoginForm/>
                        <p id="Alreadyhaveaccount">Already have an account? <br /><span><a href="" target="_self" style={{textDecoration:"none",color:"#8759F2"}}onClick={()=>{alert("Login-Page will be called here.")}}  >Login Here</a></span> </p>    
                        <p id="GoogleSignup">Or SignUp With <Button onClick={()=>{
                            alert("Here Now Google Dev API Must Be Called")}}><img src={Googlei} alt="Google" />Google</Button></p>                      
                   </div>
               </Row>
                <Row className="FooterPrivacy">
                    <p>Privacy Policy  &nbsp; &#8226; Terms And Conditions</p>
                </Row>
            </Container>
        </>
    )
}

export default LoginPage;

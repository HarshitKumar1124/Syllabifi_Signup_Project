import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import "./LoginPage.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom"




const LoginForm = () => {

    const [FullName, SetFullName] = useState("");
    const [Email, SetEmail] = useState("");
    const [Pass, SetPassword] = useState("");
    const [Repassword, SetRePassword] = useState("");
    const [Visible, SetVisible] = useState(0);
    const [RepasswordVisible, SetRepasswordVisibility] = useState(0);



    const NameChange = (e) => {
        SetFullName(e.target.value);
    }
    const EmailChange = (e) => {
        SetEmail(e.target.value);
    }
    const PasswordChange = (e) => {
        SetPassword(e.target.value);
    }
    const RepasswordChange = (e) => {
        SetRePassword(e.target.value);
    }

    const ChangeVisibilty = () => {
        if (Visible === 0)
            SetVisible(1);
        else { SetVisible(0); }
    }

    const ChangeVisibiltyofRepassword = () => {
        if (RepasswordVisible === 0)
            SetRepasswordVisibility(1);
        else
            SetRepasswordVisibility(0);
    }


    const Display = () => {

        if (FullName === "" || Email === "" || Pass === "" || Repassword === "")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something fields are empty! You are being send to next page without signing up information.',
            })
        else {
            Swal.fire(`Welcome "${FullName}"`)

            SetFullName("");
            SetEmail("");
            SetPassword("");
            SetRePassword("");
            SetVisible(0);
            SetRepasswordVisibility(0);
        }
    }

    return (
        <div className="Form">

            <Form>
                <FormGroup style={{  }}>
                {/* border: "1px solid green" */}
                    <h6>Register</h6>
                </FormGroup>
                <FormGroup id="Name_group">
                    <Label for="Name" id="Name_Label">Name</Label>
                    <Input style={{ height: "48px" }} type="text" name="Name" id="Name" placeholder="Enter Full Name" value={FullName} required onChange={NameChange} />
                </FormGroup>
                <FormGroup id="Email_group">
                    <Label for="Email" id="Email_Label">Email</Label>
                    <Input style={{ height: "48px" }} type="email" name="Email" id="Email" placeholder="Enter Email" required value={Email} onChange={EmailChange} />
                </FormGroup>
                <FormGroup id="Password_group" style={{ }}>
                {/* border: "1px solid red" */}
                    <Label for="Password" id="Password_Label">Password</Label>
                    <Button style={{ position: "absolute", right: "5px", top: "38px", zIndex: "2", backgroundColor: "white", color: "#9DA7BD", border: "none" }} onClick={ChangeVisibilty} >{(Visible === 0) ? <VisibilityOffIcon /> : <VisibilityIcon />}</Button>
                    <Input style={{ height: "48px" }} type={Visible ? "text" : "password"} Password="Password" id="Password" placeholder="Enter Password" value={Pass} onChange={PasswordChange} required />
                </FormGroup>
                <FormGroup id="Repassword_group">
                    <Label for="Repassword" id="Repassword_Label">Re_Password</Label>
                    <Button style={{ position: "absolute", right: "5px", top: "38px", zIndex: "2", backgroundColor: "white", color: "#9DA7BD", border: "none" }} onClick={ChangeVisibiltyofRepassword} >{(RepasswordVisible === 0) ? <VisibilityOffIcon /> : <VisibilityIcon />}</Button>
                    <Input style={{ height: "48px" }} type={RepasswordVisible ? "text" : "password"} name="Repassword" id="Repassword" placeholder="Re-enter Password" value={Repassword} onChange={RepasswordChange} required />
                </FormGroup>


            </Form>

            <Link tag="a" to="/Desktop" action><Button type="submit" color="primary" id="SignUp" onClick={Display}>Sign up &gt;</Button></Link>
           
            
            
        </div>
    )
}

export default LoginForm

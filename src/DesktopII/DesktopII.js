import React, { useState } from 'react';
import { Container, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import "./Desktopii.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Language from "./Language";
import PaginationBubble from "./Pagination";
import ArrayOfLanguages from "./ArrayOfLanguage";
import {Link} from "react-router-dom";

const DesktopII = () => {

    const [UserName,SetUserName]=useState("");
    const [NoOfHour,SetNoOfHour]=useState(1);


    const ChangeUserName=(e)=>{
     
        SetUserName(e.target.value);
    }
    const ChangeHour=(e)=>{
     
        SetNoOfHour(e.target.value);
    }
    const IncrementHour=()=>{
        if(NoOfHour===24)
        SetNoOfHour(24)
        else
        SetNoOfHour(NoOfHour+1);
    }
    const DecrementHour=()=>{

        if(NoOfHour===0)
        SetNoOfHour(0);
        else
        SetNoOfHour(NoOfHour-1);
    }



    return (
        <>
            <Container fluid className="Full_screen_width">
                <Row className="MidContainer">
                    <Row className="Pagination_block">
                       <PaginationBubble/>
                    </Row>

                    <Row className="Main_Block">

                        <div className="setPreferences" >
                            <h6>Set your Preferences</h6>
                        </div>

                        <div className="Info_Box">

                            <FormGroup id="UserName_group">
                                <Label for="UserName" id="UserName_Label">Set your Username<span style={{ color: "red" }}> *</span></Label>
                                <Input style={{ height: "48px" }} type="text" name="UserName" id="UserName" value={UserName} onChange={ChangeUserName} placeholder="eg. John Doe" required />
                            </FormGroup>
                            <FormGroup id="SetHour_group">
                                <Label for="SetHour" id="SetHour_Label">Set your daily hours<span style={{ color: "red" }}> *</span></Label>
                                <Input style={{ height: "48px" }} type="number" name="SetHour" id="SetHour" value={NoOfHour} onChange={ChangeHour} required min={0} max={24} />
                                <span id="Buttons"><Button id="Decrement" onClick={DecrementHour}><RemoveIcon /></Button> &nbsp;<Button id="Increment" onClick={IncrementHour}><AddIcon /></Button></span>

                            </FormGroup>



                            <div className="Language_Checkbox">
                                <p style={{ fontWeight: "600", fontSize: "16px" }}>Choose your Prefered Languages</p>

                                <div className="Languages">
                                  {
                                      ArrayOfLanguages.map((element)=>{
                                         return <Language key={element.id} id={element.id} LangName={element.Language} />
                                      })
                                  }
                                </div>

                            </div>

                            <div className="due_you_have_stylus">
                               <p>Do you have a Pen-tablet/i-pad with stylus/ android tablet with stylus?</p>
                                 
                            </div>

                            <div className="Button_yes_no">
                                <Button>Yes</Button>
                                <Button>No</Button>
                            </div>

                        </div>
                        





                        <div className="FooterButton">

                            <Link tag="a" to="/Desktop" action ><Button id="Previous">Previous</Button></Link>
                            <Link tag="a" to="/DashBoard" action ><Button id="Previous" style={{ position: "absolute", bottom: "0px", right: "100px", width: "100px", height: "41px" }} >Skip</Button></Link>
                            <Link tag="a" to="/DashBoard" action ><Button id="Next">Next</Button></Link>

                        </div>

                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default DesktopII;

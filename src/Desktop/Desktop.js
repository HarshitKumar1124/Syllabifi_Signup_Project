import React from 'react';
import { Container, Row} from 'reactstrap';
import "./Desktop.css";
import CheckBoxes from "./CheckboxCard";
import {Button} from "reactstrap";
import ArrayOfSubject from "./ChecklistSubject";
import PaginationBubble from "./Pagination";
import {Link} from "react-router-dom";


const Desktop = () => {
    return (
        <>
            <Container fluid className="Full_screen_width">
                <Row className="MidContainer">
                    <Row className="Pagination_block">
                      <PaginationBubble/> 
                    </Row>

                    <Row className="Main_Block">

                        <div className="whatisyourspecialization" >
                            <h6>What subject you are specialized in ?</h6>
                            <p>You can add more than 1 subject</p>
                        </div>

                        <div className="checkboxes">
                               
                               {
                                   ArrayOfSubject.map((element)=>{
                                    return <CheckBoxes key={element.id} id={element.id} imgsrc={element.imglink} subject={element.text}/>
                                   })
                               }
                               
                        </div>


                        <div className="FooterButton">

                            <Link tag="a" to="/" action ><Button id="Previous">Previous</Button></Link>
                            <Link tag="a" to="/DesktopII" action ><Button id="Previous"style={{position:"absolute",bottom:"0px",right:"100px",width:"100px",height:"41px"}} >Skip</Button></Link>
                            <Link tag="a" to="/DesktopII" action ><Button id="Next">Next</Button></Link>

                        </div>

                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default Desktop;

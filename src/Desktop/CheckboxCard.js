import React from 'react';
import "./Desktop.css";
import Checkbox from '@material-ui/core/Checkbox';
import { Label } from 'reactstrap';



const CheckboxCard = (props) => {

  const GotChecked =(e)=>{
      var x=document.getElementById(props.id)

      if(e.target.checked===true)
      x.style.border="2px solid #8759F2";
      else
      x.style.border="1px solid Black";


  }

 


    return (
        <>
            <Label for={props.id+"x"} className="CheckBox" id={props.id} >
                  
                  <img src={props.imgsrc} alt={props.subject} style={{width:"96px",height:"96px",position:"absolute",top:"8px",left:"8px"}} />
                <h5 style={{position:"absolute",top:"48px",left:"120px",fontSize:"16px",width:"92px",height:"16px",color:"#25252D, 100%"}}>{props.subject}</h5>
                 <span style={{position:"absolute",top:"3px",right:"3px"}}><Checkbox id={props.id+"x"} color="primary" onClick={GotChecked}  /></span>

            </Label>
        </>
    )
}

export default CheckboxCard

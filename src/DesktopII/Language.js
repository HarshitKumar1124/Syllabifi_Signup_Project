import React from 'react';
import "./Desktopii.css";
import Checkbox from '@material-ui/core/Checkbox';

const Language = (props) => {

 const Changestate=(e)=>{

    if(e.target.checked===true)
    e.target.value=false;
    else
    e.target.value=true;
 }

    return (
        <>
            <div className="language_box" id={props.id}>
               <Checkbox color="primary" style={{position:"absolute",left:"0px"}} onClick={Changestate}/>
                <p>{props.LangName}</p>
            </div>
        </>
    )
}

export default Language

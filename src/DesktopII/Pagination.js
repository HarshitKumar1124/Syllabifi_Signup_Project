import React from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "./Desktopii.css";

const Pagination = () => {
    return (
        <>
            <ul style={{listStyleType:"none"}} className="PaginationList">
                <li style={{color:"#00BA88"}}><FiberManualRecordIcon/></li>
                <li style={{color:"#00BA88"}}><FiberManualRecordIcon/></li>
                <li style={{color:"#00BA88"}}><FiberManualRecordIcon/></li>
                <li><RadioButtonUncheckedIcon/></li>
                <li><FiberManualRecordIcon/></li>
                <li><FiberManualRecordIcon/></li>
            </ul>
        </>
    )
}

export default Pagination

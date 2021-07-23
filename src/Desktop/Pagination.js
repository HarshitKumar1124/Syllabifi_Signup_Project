import React from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "./Desktop.css";

const Pagination = () => {
    return (
        <>
            <ul style={{listStyleType:"none"}} className="PaginationList">
                <li><FiberManualRecordIcon/></li>
                <li><FiberManualRecordIcon/></li>
                <li><RadioButtonUncheckedIcon/></li>
                <li><RadioButtonUncheckedIcon/></li>
                <li><RadioButtonUncheckedIcon/></li>
                <li><RadioButtonUncheckedIcon/></li>
            </ul>
        </>
    )
}

export default Pagination

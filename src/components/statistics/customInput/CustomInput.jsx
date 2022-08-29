import React from 'react';
import icon_calendar from '../../../images/icon_calendar.png';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div className="input_date" onClick={props.onClick}>
            <label ref={ref}>
                {props.value || props.placeholder}
            </label>
            <img src={icon_calendar} alt="input-date" />
        </div>
    );
});

export default CustomInput;
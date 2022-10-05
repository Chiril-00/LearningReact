import React from 'react';

const AlertButton = ({onButtonClick}) => {

    return (
        <div>
            <button onClick={onButtonClick}>Alert and clear</button>
        </div>
    )
}
export default AlertButton;
import { useState, useEffect } from 'react';

import './Notification.css';


const Notification = (props) => {

    const [textMessage, setTextMessage] = useState('');

    useEffect(() => {
        setTextMessage(props.text);
    }, [props]);

    console.log(props.text);
    console.log(textMessage + "!!! This is the new MESSAGE from Notification component !!!");

    const changeStyleDisplayNone = () => {
        props.setText('');
        setTextMessage('');
    }


    return (
        <div className="notificationDiv" onClick={changeStyleDisplayNone}>
            {textMessage ? <p>{textMessage}</p> : null}
        </div>
    );
}

export default Notification;

import React, {useState} from 'react';
import styles from './MessageArea.module.scss';

const MessageArea = (props) => {
    const [inputMessage, setMessage] = useState('');

    const changeHandler = ({target: {value}}) => {
        setMessage(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.addMessage(inputMessage);
        setMessage('');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <textarea value={inputMessage} onChange={changeHandler} className={styles.textarea} />
                <button type='submit'>Send message</button>
            </form>
        </div>
    );
}

export default MessageArea;

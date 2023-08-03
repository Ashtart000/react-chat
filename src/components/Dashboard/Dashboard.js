import React, { useState, useReducer, useEffect } from 'react';
import DialogList from '../DialogList/DialogList';
import Chat from '../Chat/Chat';
import MessageArea from '../MessageArea/MessageArea';
import { UserContext } from '../../contexts/UserContext';
import { getData } from '../../api';
import CONSTANTS from '../../constants';
import styles from './Dashboard.module.scss';
const { ACTIONS } = CONSTANTS

function reducer(state, action) {

}

const Dashboard = () => {
    const [user, setUser] = useState({
        id: 1,
        username: 'c123s',
        avatart: 'https://robohash.org/c123s.png'
    })

    const [state, dispatch] = useReducer(reducer, {
        messages: []
    })

    useEffect(() => {
        getData()
        .then((data) => {
            dispatch({
                type: ACTIONS.DATA_LOAD_SUCCESS,
                payload: {
                    data
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: ACTIONS.DATA_LOAD_ERROR
            })
        })
    }, [])

    return (
        <UserContext.Provider value={user}>
        <main className={styles.container}>
            <DialogList />
            <section className={styles.wrapper}>
                <Chat />
                <MessageArea />
            </section>
        </main>
        </UserContext.Provider>
    );
}

export default Dashboard;

import CONSTANTS from '../constants/index';
const { ACTIONS } = CONSTANTS

export function reducer(state, action) {

    switch(action.type) {

        case ACTIONS.DATA_LOAD_SUCCESS: {

            const {payload: {data}} = action;

            return {

                ...state,

                messages: data.comments

            }

        }

        case ACTIONS.DATA_LOAD_ERROR: {

            const {payload: {error}} = action;

            return {

                ...state,

                error

            }

        }

        case ACTIONS.ADD_NEW_MESSAGE: {

            // state.messages.push(newMessage) // ЗАБОРОНЕНО!!!

            const {payload: {newMessage}} = action;

            const newArrayMessages = [...state.messages, newMessage];

            return {

                ...state,

                messages: newArrayMessages

            }

        }

        default: {

            return state;

        }

    }

}
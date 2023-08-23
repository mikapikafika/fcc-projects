const initialState = {
    breakLength: 5,
    sessionLength: 25,
    isRunning: false,
    timeLeft: 25 * 60, // seconds
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_BREAK':
            return {
                ...state,
                breakLength: Math.min(state.breakLength + 1, 60)
            };

        case 'DECREMENT_BREAK':
            return {
                ...state,
                breakLength: Math.max(state.breakLength - 1, 1)
            };

        case 'INCREMENT_SESSION':
            return {
                ...state,
                sessionLength: Math.min(state.sessionLength + 1, 60)
            };

        case 'DECREMENT_SESSION':
            return {
                ...state,
                sessionLength: Math.max(state.sessionLength - 1, 1)
            };

        case 'START_STOP':
            return {
                ...state,
                isRunning: !state.isRunning
            };

        case 'RESET':
            return {...initialState};

        case 'TICK':
            return {
                ...state,
                timeLeft: Math.max(state.timeLeft - 1, 0)
            };

        default:
            return state;
    }
}

export default timerReducer;
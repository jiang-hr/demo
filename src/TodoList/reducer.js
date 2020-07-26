const State = {
    inputValue: 'Write Something',

    content: '',

    list: [
        'JavaScript',
        'TypeScript',
        'Haskell',
    ],

    styleOne: {
        margin: '10px',
    },

    styleTwo: {
        margin: '10px',
        width: '300px',
    },
}

export default (_state = State, action) => {
    // console.log(state, action);
    switch (action.type) {
        case 'changeInput':
            State.content = action.value;
            break;
        case 'changeList':
            State.list.push(State.content);
            State.content = '';
            break;
        case 'delList':
            State.list.splice(action.number, 1);
            break;
        default:
            break;
    }
    return State;
}
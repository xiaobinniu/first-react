export const storeState = {
    name: 'tom'
}

const reducer = (state = storeState, action: { type: string, value: string }) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case 'changename':
            newState.name = action.value
            break;

        default:
            break;
    }

    return newState
}


export default reducer
export const storeState = {
    num: 11
}

const reducer = (state = storeState, action: { type: string }) => {
    let newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case 'increase':
            newState.num++

            break;

        default:
            break;
    }

    return newState
}


export default reducer
import { ActionProps } from "../types/schemaTypes";

interface ChangeStatesI {
    state: ActionProps['state'],
    action: ActionProps['action']
}

const reducerFactory = (initialState: any, handlers: any) => {
    return (state: ActionProps['state'] = initialState, action: ActionProps['action']) => {
        const handler = handlers[action.type];
        if (handler) return handler({ state, action });
        return state;
    }
}

export const changeState = (key: string) => ({ state, action }: ChangeStatesI) => {
    return {
        ...state,
        [key]: action.payload
    }
}

export const changeStateObject = () => ({ state, action }: ChangeStatesI) => {
    return {
        ...state,
        ...action.payload
    }
}

export default reducerFactory
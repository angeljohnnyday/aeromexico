import reducerFactory, { changeState } from '../reducerFactory'
import { favoriteSchema, HandlerProps } from '../../types/schemaTypes';

export const FAVORITE_ACCION = {
    ADD: 'favorite/add',
    REMOVE: 'favorite/remove'
};

const handlers: HandlerProps = {
    [FAVORITE_ACCION.ADD]: changeState('items'),
    [FAVORITE_ACCION.REMOVE]: changeState('items'),
}

export default reducerFactory(favoriteSchema, handlers)
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { FAVORITE_ACCION } from '../redux/reducer/favorite';
import { FavoriteProps } from '../types/favoriteTypes';
import { StoreProps } from '../types/schemaTypes';

export default function useFavorites() {
    const dispatch = useDispatch();
    const { items } = useSelector(({ favorite: { items } }: StoreProps) => ({ items }));

    const addFavorite = useCallback((item: Pick<FavoriteProps, 'id' | 'image' | 'alive' | 'name' | 'dateOfBirth' | 'gender' | 'eyeColour' | 'hairColour'>) => {
        dispatch({
            type: FAVORITE_ACCION.ADD,
            payload: [...items, item]
        })
    }, [items])

    const removeFavorite = useCallback((nameId: string) => {
        const newList = items.filter(({ id }) => id !== nameId);
        dispatch({
            type: FAVORITE_ACCION.REMOVE,
            payload: [...newList]
        })
    }, [items])

    return { items, addFavorite, removeFavorite }
}
